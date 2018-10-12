import React from 'react';
import { Platform,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import _ from 'lodash';

import Colors from '../constants/Colors';

class AuthLoadingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = { token: null };

  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    // if (token) {
    //   this.props.navigation.navigate('App');
    // } else {
    //   this.props.navigation.navigate('Main');
    // }
  }


  render() {
    if (_.isNull(this.state.token)) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size={30}
            color={Colors.primaryBackground} />
            {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.tintColor,
  }
});

export default AuthLoadingScreen;
