import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DonateScreen from '../screens/Donate.jsx';
import VideosScreen from '../screens/Videos.jsx';
import NewsScreen from '../screens/News.jsx';
import EventsScreen from '../screens/Events.jsx';
import ResourcesScreen from '../screens/Resources.jsx';
import { Icon } from '@ui-kitten/components'

const BottomTab = createBottomTabNavigator();

export default class TabNavigator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="NewsFeed"
          tabBarOptions={{
            showLabel: false,
            activeBackgroundColor: '#010002'
          }}>
          <BottomTab.Screen
            name="Donate"
            component={DonateScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="donate" color={'#AA1C0D'} size={size} />
              ),
            }} />
          <BottomTab.Screen
            name="Videos"
            component={VideosScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Fontisto name="youtube-play" color={'#F16B0E'} size={size} />
              ),
            }} />
          <BottomTab.Screen
            name="NewsFeed"
            component={NewsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="newspaper-o" color={'#ECEC0D'} size={size} />
              ),
            }} />
          <BottomTab.Screen
            name="Events"
            component={EventsScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                <Icon
                  name="calendar"
                  width={32}
                  height={32}
                  fill={focused ? '#111' : '#939393'} />
              },
            }} />
          <BottomTab.Screen
            name="Resources"
            component={ResourcesScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Icon
                  name="heart-outline"
                  width={32}
                  height={32}
                  fill={focused ? '#111' : '#939393'}
                />
              ),
            }} />
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  }

}
