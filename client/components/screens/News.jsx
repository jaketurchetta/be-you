import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Layout } from 'react-native-ui-kitten'

export default class News extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Newsfeed Screen </Text>
      </Layout>
    );
  }

}