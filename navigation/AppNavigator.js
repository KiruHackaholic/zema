import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AuthScreen from '../screens/AuthScreen';
import MainTabNavigator from './MainTabNavigator';

const AppStack = createStackNavigator({
  Main: MainTabNavigator
});

const MainStack = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Auth: AuthScreen,
});

const RouteStack = createStackNavigator({
  Settings: SettingsScreen
});


export default createSwitchNavigator({
  Main: MainStack,
  App: AppStack,
  Route: RouteStack
});
