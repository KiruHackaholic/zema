import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginTab from '../components/common/LoginTab';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
      header: null
  };

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
    padding: 16,
    backgroundColor: '#fff',
  },
});