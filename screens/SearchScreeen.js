import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import LibraryList from '../components/library/LibraryList';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
        <ScrollView style={styles.container}>
            <LibraryList/>
        </ScrollView>
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
