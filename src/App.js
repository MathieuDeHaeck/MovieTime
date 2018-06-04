// @flow
import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import TabBarNavigator from './router';
import { configureFontAwesomePro } from 'react-native-fontawesome-pro';
import { Provider } from 'react-redux';
import configureStore from './store';

configureFontAwesomePro();
const store = configureStore();

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <TabBarNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
    // alignItems: 'center'
    // backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
