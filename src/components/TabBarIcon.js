// @flow
import React, { Component } from 'react';
// import { StyleSheet, Text } from 'react-native';
import Icon from 'react-native-fontawesome-pro';

type TabBarIconProps = {
  focused: boolean,
  tintColor: string,
  name: string
};
type TabBarIconState = {};
const initialState: TabBarIconState = {};

class TabBarIcon extends Component<TabBarIconProps, TabBarIconState> {
  constructor(props: TabBarIconProps) {
    super(props);
    this.state = initialState;
  }

  render() {
    const { focused, tintColor, name } = this.props;
    if (focused) {
      return <Icon name={name} color={tintColor} type="light" />;
    }
    return <Icon name={name} color={tintColor} type="light" />;
  }
}

export default TabBarIcon;

// const styles = StyleSheet.create({});
