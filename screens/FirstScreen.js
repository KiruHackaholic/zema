import React from 'react';
import firebase from 'firebase';
import { View, Text, StyleSheet } from 'react-native';
import LoginTab from '../components/LoginTab';

export default class FirstScreen extends React.Component {
  static navigationOptions = {
      header: null
  };

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyByFJwfF3cwNiJel1zaty9ICmVu4oJKjXQ',
        authDomain: 'zema-2406f.firebaseapp.com',
        databaseURL: 'https://zema-2406f.firebaseio.com',
        projectId: 'zema-2406f',
        storageBucket: 'zema-2406f.appspot.com',
        messagingSenderId: '364159775869'
      });
  }

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