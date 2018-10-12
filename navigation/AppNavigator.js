import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AuthScreen from '../screens/AuthScreen';
import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';


const MainStack = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Auth: AuthScreen,
}, {
  lazyLoad: true
});

const RouteStack = createStackNavigator({
  Settings: SettingsScreen
}, {
  lazyLoad: true
});


export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Main: MainStack,
  App: MainTabNavigator,
  Route: RouteStack
}, {
  initialRouteName: 'App',
}, {
  lazyLoad: true
});
