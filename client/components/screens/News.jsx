import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ApplicationProvider, IconRegistry, Layout, Text, Avatar } from 'react-native-ui-kitten';
import FeedNavigator from '../navigation/TopNavigator.jsx'

export default class News extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <FeedNavigator />
        <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text> Newsfeed Screen </Text>
        </Layout>
      </React.Fragment>
    );
  }

}