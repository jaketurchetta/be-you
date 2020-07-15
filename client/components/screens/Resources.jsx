import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FeedNavigator from '../navigation/TopNavigator.jsx'

export default class Resources extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <FeedNavigator />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text> Find various LGBTQ+ resources here </Text>
        </View>
      </React.Fragment>

    );
  }

}