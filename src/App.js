// @flow
import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import TabBarNavigator from './router';
import { configureFontAwesomePro } from 'react-native-fontawesome-pro';
import { Provider } from 'react-redux';
import configureStore from './store';
import { styles } from './styles';

configureFontAwesomePro();
const store = configureStore();

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.appContainer}>
          <StatusBar barStyle="light-content" />
          <TabBarNavigator />
        </View>
      </Provider>
    );
  }
}
