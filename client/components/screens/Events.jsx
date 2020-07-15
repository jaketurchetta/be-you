import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FeedNavigator from '../navigation/StackNavigator.jsx'

export default class Events extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <FeedNavigator />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text> Find local LGBTQ+ events here </Text>
        </View>
      </React.Fragment>
    );
  }

}