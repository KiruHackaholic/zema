import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppNavigator from './navigation/AppNavigator';
import FirstScreen from './screens/FirstScreen';
import reducers from './reducers';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    loggedIn: false
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

    firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({loggedIn: true}) : this.setState({loggedIn: false});
    });
  }

  _isUserLoggedIn() {
    if (this.state.isLoadingComplete && this.state.loggedIn) {
      return <AppNavigator />;
    } return (
      <FirstScreen/>
    );
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={createStore(reducers)}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            {this._isUserLoggedIn()}
          </View>
        </Provider>
        
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
