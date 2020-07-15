import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FeedNavigator from '../navigation/StackNavigator.jsx'

export default class Videos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <FeedNavigator />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text> This is the Video Feed </Text>
        </View>
      </React.Fragment>

    );
  }

}