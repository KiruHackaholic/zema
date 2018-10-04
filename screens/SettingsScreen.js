import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import firebase from 'firebase';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  _signOut() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={styles.settingContainer}>
          <TouchableOpacity>
              <Text style={styles.signOut}
                onPress={this._signOut.bind(this)}>
                  Sign out
              </Text>
          </TouchableOpacity>
      </View>
    );
  }
};

const styles = {
  settingContainer: {
    padding: 10
  },
  signOut: {
    padding: 5,
    margin: 4
  }
};
