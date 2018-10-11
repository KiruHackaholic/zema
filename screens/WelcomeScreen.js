import React from 'react';
import { ScrollView, StyleSheet,
  View,
  Text } from 'react-native';
import Slides from '../components/Slides';
import Colors from '../constants/Colors';

const SLIDE_DATA = [
  {'title': 'Welcome to Zema', 'color': Colors.tintColor},
  {'title': 'Home of Audiobooks', 'color': Colors.warningBackground},
  {'title': 'Listen wherever, whenever you want', 'color': Colors.errorBackground}
];

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  _onSlidesComplete = () => {
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
        <Slides data={SLIDE_DATA}
          onSlideComplete={this._onSlidesComplete}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
});
