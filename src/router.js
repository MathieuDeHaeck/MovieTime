// @flow
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import MoviesScreen from './screens/MoviesScreen';
import TvShowsScreen from './screens/TvShowsScreen';
import TabBarIcon from './components/TabBarIcon';
import { styles, themeColors } from './styles';

const TabBarNavigator = createBottomTabNavigator(
  {
    Movies: {
      screen: MoviesScreen,
      navigationOptions: {
        title: 'Movies',
        tabBarIcon: ({ focused, tintColor }) => <TabBarIcon focused={focused} tintColor={tintColor} name={'film'} />
      }
    },
    TvShows: {
      screen: TvShowsScreen,
      navigationOptions: {
        title: 'TV Shows',
        tabBarIcon: ({ focused, tintColor }) => <TabBarIcon focused={focused} tintColor={tintColor} name={'tv'} />
      }
    },
    WatchList: {
      screen: TvShowsScreen,
      navigationOptions: {
        title: 'Watch List',
        tabBarIcon: ({ focused, tintColor }) => <TabBarIcon focused={focused} tintColor={tintColor} name={'heart'} />
      }
    },
    Profile: {
      screen: TvShowsScreen,
      navigationOptions: {
        title: 'Profile',
        tabBarIcon: ({ focused, tintColor }) => <TabBarIcon focused={focused} tintColor={tintColor} name={'user'} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: themeColors.beta,
      style: styles.tabBar
    }
  }
);

export default TabBarNavigator;
