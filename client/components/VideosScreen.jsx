import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class VideosScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is the Video Feed </Text>
      </View>
    );
  }

}