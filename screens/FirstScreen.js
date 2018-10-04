import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginTab from '../components/LoginTab';

export default class FirstScreen extends React.Component {
  static navigationOptions = {
      header: null
  };

  state = { loggedIn: false };

  render() {
    return (
        <View style={styles.container}>
            <LoginTab/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});