import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { TabBarIcon } from '../components/common';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import PostScreen from '../screens/PostScreen';
import SearchScreen from '../screens/SearchScreeen';
import SettingsScreen from '../screens/SettingsScreen';
import MapLocationScreen from '../screens/MapLocationScreen';
import JobsScreen from '../screens/JobsScreen';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    MapLocation: MapLocationScreen,
    Jobs: JobsScreen
  },
  {
    navigationOptions: {
      headerStyle: {
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
          width:0
        },
        shadowRadius: 1,
        elevation: 1,
      },
    }
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-card${focused ? '' : '-outline'}`
          : 'md-card'
      }
    />
  ),
};

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    navigationOptions: {
      headerStyle: {
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
          width:0
        },
        shadowRadius: 1,
        elevation: 1,
      },
    }
  });

SearchStack.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'md-search'} />
  ),
};

const PostStack = createStackNavigator(
  {
    Links: PostScreen,
  },
  {
    navigationOptions: {
      headerStyle: {
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
          width:0
        },
        shadowRadius: 1,
        elevation: 1,
      },
    }
  });

PostStack.navigationOptions = {
  tabBarLabel:'Post',
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-camera${focused ? '' : '-outline'}` : 'md-camera'}
    />
  ),
};

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  {
    navigationOptions: {
      headerStyle: {
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
          width:0
        },
        shadowRadius: 1,
        elevation: 1,
      },
    }
  });

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  {
    navigationOptions: {
      headerStyle: {
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
          width:0
        },
        shadowRadius: 1,
        elevation: 1,
      },
    }
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SearchStack,
  PostStack,
  LinksStack,
  SettingsStack,
}, {
  animationEnabled: true,
  lazy: true,
});
