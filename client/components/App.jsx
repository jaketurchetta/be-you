import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Donate from './Donate.jsx';
import Videos from './Videos.jsx';
import NewsFeed from './NewsFeed.jsx';
import Events from './Events.jsx';
import Resources from './Resources.jsx';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Donate" component={Donate} />
      <Tab.Screen name="Videos" component={Videos} />
      <Tab.Screen name="NewsFeed" component={NewsFeed} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Resources" component={Resources} />
    </Tab.Navigator>
  );
}

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Be You!</Text>
        <MyTabs />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
