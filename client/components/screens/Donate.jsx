import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FeedNavigator from '../navigation/StackNavigator.jsx'

export default class Donate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <FeedNavigator />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text> Donate to LGBTQ+ initiatives here </Text>
        </View>
      </React.Fragment>

    );
  }

}