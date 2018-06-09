import { StyleSheet } from 'react-native';

const colors = {
  blue: '#0a1c24',
  green: '#30cf7d',
  white: '#ffffff'
};

export const themeColors = {
  alpha: colors.blue,
  beta: colors.green
};

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  tabBar: {
    backgroundColor: themeColors.alpha
  },
  screenContainer: {
    flex: 1,
    // paddingTop: 60,
    backgroundColor: themeColors.alpha
  },
  title: {
    color: 'white',
    fontWeight: '800',
    fontSize: 20,
    marginBottom: 14
  },
  text: {
    color: colors.white
  },
  posterContainer: {
    width: 120
  },
  posterImage: {},
  posterTitle: {
    color: 'white'
  }
});
