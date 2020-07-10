import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header.jsx';
import BottomNavBar from './BottomNavBar.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <BottomNavBar />
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
