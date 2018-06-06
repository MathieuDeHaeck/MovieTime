// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

type TvShowsScreenProps = {};
type TvShowsScreenState = {};
const initialState: TvShowsScreenState = {};

class TvShowsScreen extends Component<TvShowsScreenProps, TvShowsScreenState> {
  constructor(props: TvShowsScreenProps) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <Text style={styles.text}>TvShowsScreen 🌈🦄</Text>;
      </View>
    );
  }
}

export default TvShowsScreen;
