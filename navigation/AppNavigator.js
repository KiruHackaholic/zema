import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthScreen from '../screens/AuthScreen';
import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';


const MainStack = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Auth: AuthScreen,
}, {
  lazyLoad: true
});

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Main: MainStack,
  App: MainTabNavigator
}, {
  initialRouteName: 'AuthLoading',
}, {
  lazyLoad: true
});
