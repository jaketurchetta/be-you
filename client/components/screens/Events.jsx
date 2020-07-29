import React from 'react'
import { Layout, Text, Avatar } from 'react-native-ui-kitten';
// import FeedNavigator from '../navigation/TopNavigator.jsx'

export default class Events extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {/* <FeedNavigator /> */}
        <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text> Find local LGBTQ+ events here </Text>
        </Layout>
      </React.Fragment>
    );
  }

}