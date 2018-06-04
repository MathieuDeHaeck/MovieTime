// @flow
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

type TvShowsScreenProps = {};
type TvShowsScreenState = {};
const initialState: TvShowsScreenState = {};

class TvShowsScreen extends Component<TvShowsScreenProps, TvShowsScreenState> {
  constructor(props: TvShowsScreenProps) {
    super(props);
    this.state = initialState;
  }

  render() {
    return <Text>TvShowsScreen 🌈🦄</Text>;
  }
}

export default TvShowsScreen;

const styles = StyleSheet.create({});
