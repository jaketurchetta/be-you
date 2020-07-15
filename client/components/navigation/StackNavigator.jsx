import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Icon, Avatar } from 'react-native-ui-kitten'
import { Header } from 'react-native-elements'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import NewsScreen from '../screens/News.jsx'

let customFonts = {
  'Billabong': require('../../../assets/fonts/Billabong.ttf')
};

export default class FeedNavigator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <React.Fragment>
          <Header
            statusBarProps={{ barStyle: 'light-content' }}
            barStyle="light-content"
            centerComponent={{ text: 'Be You', style: { fontSize: 32, fontFamily: 'Billabong' } }}
            rightComponent={
              <Icon
                name="person-outline"
                width={32}
                height={32} />
            }
            containerStyle={{
              backgroundColor: 'white',
              justifyContent: 'space-between',
            }}
          />
        </React.Fragment>
      )
    } else {
      return <AppLoading />
    }
  }

}