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
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.setState({ loggedin: true })
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
            <Login handleLogin={this.handleLogin}/>
          </ApplicationProvider>
        </Fragment>
      )
    }

  }

}
