import React, { Fragment } from 'react'
import TabNavigator from './navigation/TabNavigator.jsx'
import { mapping, light } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry, Layout, Text, Avatar } from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import Login from './login/Login.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedin: false
    }
    this.handleSocialLogin = this.handleSocialLogin.bind(this)
  }

  handleSocialLogin(method) {
    if (method === 'facebook') {
      this.setState({ loggedin: true })
    } else if (method === 'google') {
      this.setState({ loggedin: true })
    } else {
      this.setState({ loggedin: true })
    }
  }

  render() {
    if (this.state.loggedin) {
      return (
        <Fragment>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider mapping={mapping} theme={light} >
            <TabNavigator />
          </ApplicationProvider>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider mapping={mapping} theme={light} >
            <Login handleSocialLogin={this.handleSocialLogin} handleEmailLogin={this.handleEmailLogin} />
          </ApplicationProvider>
        </Fragment>
      )
    }

  }

}
