import React, { Fragment } from 'react';
import Header from './navigation/Header.jsx';
import TabNavigator from './navigation/TabNavigator.jsx';
import * as eva from '@eva-design/eva';
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const ApplicationContent = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Welcome to UI Kitten</Text>
  </Layout>
)

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <TabNavigator />
        </ApplicationProvider>
      </Fragment>
    );
  }

}
