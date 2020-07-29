import React, { Fragment } from 'react'
import TabNavigator from './navigation/TabNavigator.jsx'
import HeaderNavigator from './navigation/HeaderNavigator.jsx'
import { mapping, light } from '@eva-design/eva'
import { Alert } from 'react-native'
import { ApplicationProvider, IconRegistry, Layout, Text, Avatar } from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import Login from './login/Login.jsx'
import firebaseConfig from '../../firebase'
import * as Facebook from 'expo-facebook'
import * as firebase from 'firebase'
import * as Google from 'expo-google-app-auth'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false,
      loggedin: false,
      name: '',
      firstName: '',
      photoURL: '',
    }
    this.handleFacebookLogin = this.handleFacebookLogin.bind(this)
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this)
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
    try {
      await Facebook.initializeAsync({ appId: '3165489813558150', appName: 'Be You' })
      const { type, token, expires, permissions, declinedPermissions } = await Facebook.logInWithReadPermissionsAsync('3165489813558150', {
        permission: ['public_profile', 'email']
      })
      if (type === 'success') {
        const credential = firebase.auth.FacebookAuthProvider.credential(token)
        console.log('Credential:', credential)
        firebase.auth().signInWithCredential(credential)
          .then(this.setState({ loggedin: true }))
          .catch(error => {
            console.log(error)
          })
      } else {
        console.log('FB Authentication Type = Cancel')
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  async handleGoogleLogin() {
    try {
      const result = await Google.logInAsync({
        iosClientId: '1072710856472-r6adei6bpilb177gr4dbhki9b5tscmlo.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      })
      if (result.type === 'success') {
        this.setState({
          loggedin: true,
          name: result.user.name,
          firstName: result.user.givenName,
          photoURL: result.user.photoUrl
        }, () => {
          Alert.alert(
            'Welcome to Be You!',
            `Welcome back, ${result.user.givenName}!`,
            [
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
          );
        })
      } else {
        console.log('Google Authentication Type = Cancel')
      }
    } catch (error) {
      console.log('Error:', error)
    }
  }

  render() {
    if (this.state.loggedin && this.state.fontsLoaded) {
      return (
        <Fragment>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider mapping={mapping} theme={light} >
            <HeaderNavigator photoURL={this.state.photoURL} />
            <TabNavigator />
          </ApplicationProvider>
        </Fragment>
      )
    } else if (!this.state.loggedin && this.state.fontsLoaded) {
      return (
        <Fragment>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider mapping={mapping} theme={light} >
            <Login handleFacebookLogin={this.handleFacebookLogin} handleGoogleLogin={this.handleGoogleLogin} />
          </ApplicationProvider>
        </Fragment>
      )
    } else {
      return <AppLoading />
    }

  }

}
