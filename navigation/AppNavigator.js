import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
// import FirstScreen from '../screens/FirstScreen';

import MainTabNavigator from './MainTabNavigator';

export default createSwitchNavigator({
  Main: MainTabNavigator,
});