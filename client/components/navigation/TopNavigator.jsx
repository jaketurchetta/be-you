import React from 'react'
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Icon, Layout, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction } from 'react-native-ui-kitten'
import { Header } from 'react-native-elements'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import NewsScreen from '../screens/News.jsx'

let customFonts = {
  'Billabong': require('../../../assets/fonts/Billabong.ttf')
};

// const ProfileIcon = (props) => (
//   <Icon {...props} name='profile-outline' />
// )

// const EditIcon = (props) => (
//   <Icon {...props} name='edit' />
// );

// const MenuIcon = (props) => (
//   <Icon {...props} name='more-vertical' />
// );

// const InfoIcon = (props) => (
//   <Icon {...props} name='info' />
// );

// const LogoutIcon = (props) => (
//   <Icon {...props} name='log-out' />
// );

export default class FeedNavigator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      menuVisible: false,
      setMenuVisible: false
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

      // const [menuVisible, setMenuVisible] = React.useState(false);

      // const toggleMenu = () => {
      //   setMenuVisible(!this.state.menuVisible);
      // };

      // const renderMenuAction = () => (
      //   <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
      // );

      // const renderRightActions = () => (
      //   <React.Fragment>
      //     <TopNavigationAction icon={EditIcon} />
      //     <OverflowMenu
      //       anchor={renderMenuAction}
      //       visible={this.state.menuVisible}
      //       onBackdropPress={toggleMenu}>
      //       <MenuItem accessoryLeft={InfoIcon} title='About' />
      //       <MenuItem accessoryLeft={LogoutIcon} title='Logout' />
      //     </OverflowMenu>
      //   </React.Fragment>
      // );

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
