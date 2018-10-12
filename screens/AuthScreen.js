import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import LoginForm from '../components/LoginForm';
import Colors from '../constants/Colors';

export default class AuthScreen extends React.Component {
  static navigationOptions = {
      header: null
  };

  state = { loggedIn: false };

  _authComplete = () => {
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View style={styles.containerStyle}>
          <View style={styles.tabContainerStyle}>
              <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.bigTab}>
                      Sign in
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigator.navigate('Auth')}>
                  <Text style={styles.bigTab}>
                      Registration
                  </Text>
              </TouchableOpacity>
          </View>

          <View style={styles.loginForm}>
              <LoginForm authenticationComplete={this._authComplete}/>
          </View>

      </View>
        // <View style={styles.container}>
        //     <LoginTab authenticationComplete={this._authComplete}/>
        // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabContainerStyle: {
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bigTab: {
    width: 150,
    margin: 10,
    padding: 10,
    fontSize: 26,
    color: Colors.tintColor
  },
  loginForm: {
  }
});
