import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Icon } from 'react-native-ui-kitten'
import { Header } from 'react-native-elements'
import News from '../screens/News.jsx'

export default class FeedNavigator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"
          leftComponent={
            <Icon
              name="menu"
              width={32}
              height={32}
            />
          }
          centerComponent={{ text: 'Be You', style: { color: '#34495e' } }}
          containerStyle={{
            backgroundColor: 'white',
            justifyContent: 'space-around',
          }}
        />
      </React.Fragment>
    );
  }

}