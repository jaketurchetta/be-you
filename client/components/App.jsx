import React, { Fragment } from 'react'
import TabNavigator from './navigation/TabNavigator.jsx'
import { mapping, light } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry, Layout, Text, Avatar } from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import Login from './login/Login.jsx'
import firebaseConfig from '../../firebase'
import * as Facebook from 'expo-facebook'
import * as firebase from 'firebase'

Facebook.initializeAsync({appId: '3165489813558150' | undefined, appName: 'Be You' | undefined})

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      loggedin: false
    }
    this.handleFacebookLogin = this.handleFacebookLogin.bind(this)
  }

  componentDidMount() {
    this._loadFontsAsync()
    firebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
          console.log(user)
      }
    })
  }

  async _loadFontsAsync() {
    await Font.loadAsync({ 'Billabong': require('../../assets/fonts/Billabong.ttf') })
    this.setState({ fontsLoaded: true })
  }

  async handleFacebookLogin() {
    const { type, token } = await
    Facebook.logInWithReadPermissionsAsync(
      "342823069910303", {
      permission: [ "public_profile", "email" ]
    }
    )
    if (type === "success") {
      console.log("Successful FB login!")
      const credential =
        firebase.auth().FacebookAuthProvider
          .credential(token)
    }
    firebase.auth().signInWithCredential(credential)
      .then(this.setState({ loggedin: true}))
      .catch(error => {
         console.log(error)
     })
  }

  render() {
    if (this.state.loggedin && this.state.fontsLoaded) {
      return (
        <Fragment>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider mapping={mapping} theme={light} >
            <TabNavigator />
          </ApplicationProvider>
        </Fragment>
      )
    } else if (!this.state.loggedin && this.state.fontsLoaded) {
      return (
        <Fragment>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider mapping={mapping} theme={light} >
            <Login handleFacebookLogin={this.handleFacebookLogin} />
          </ApplicationProvider>
        </Fragment>
      )
    } else {
      return <AppLoading />
    }

  }

}
