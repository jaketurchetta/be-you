import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DonateScreen from './DonateScreen.jsx';
import VideosScreen from './VideosScreen.jsx';
import NewsScreen from './NewsScreen.jsx';
import EventsScreen from './EventsScreen.jsx';
import ResourcesScreen from './ResourcesScreen.jsx';

const BottomTab = createBottomTabNavigator();

export default class BottomNavBar extends React.Component {

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
              activeBackgroundColor: '#F4F5F6'
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
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="calendar" color={'#0EA304'} size={size} />
                ),
              }} />
            <BottomTab.Screen
              name="Resources"
              component={ResourcesScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="heart" color={'#0A25BB'} size={size} />
                ),
              }} />
          </BottomTab.Navigator>
        </NavigationContainer>
    );
  }

}
