import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { PostsList } from '../components/common';

import { MonoText } from '../components/common/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} >
          <View style={styles.postsContainer}>
            <PostsList/>
          </View>

        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
    } else {
    }
  }

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    backgroundColor: '#fff',
  },
  postsContainer: {
    flexDirection: 'column',
    marginLeft: 0,
    marginBottom: 5,
    padding: 0
  },
});
