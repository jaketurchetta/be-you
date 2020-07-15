import React, { Fragment } from 'react';
import TabNavigator from './navigation/TabNavigator.jsx';
import { mapping, light } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text, Avatar } from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={light} >
          <TabNavigator />
        </ApplicationProvider>
      </Fragment>
    );
  }

}
