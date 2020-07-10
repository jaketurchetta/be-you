import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import NewsScreen from '../screens/News.jsx';
// import ProfileScreen from './ProfileScreen.jsx';


const TopTab = createMaterialTopTabNavigator();

const StackScreen = () => {
  return (
    <NavigationContainer>
      <TopTab.Navigator>
        <TopTab.Screen
          name="Home"
          options={{
            title: 'Be You',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <TopTab.Screen
          name="Profile"
          options={{
            title: 'Be You',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </TopTab.Navigator>
    </NavigationContainer>
  );
}

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Text> HEADER </Text>
    );
  }

}