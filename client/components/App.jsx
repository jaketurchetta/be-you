import React, { Fragment } from 'react'
import TabNavigator from './navigation/TabNavigator.jsx'
import { mapping, light } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry, Layout, Text, Avatar } from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import Login from './login/Login.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      loggedin: false
    }
  }

  componentDidMount() {
    this._loadFontsAsync()
  }

  async _loadFontsAsync() {
    await Font.loadAsync({ 'Billabong': require('../../assets/fonts/Billabong.ttf') })
    this.setState({ fontsLoaded: true })
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
            <Login />
          </ApplicationProvider>
        </Fragment>
      )
    } else {
      return <AppLoading />
    }

  }

}
