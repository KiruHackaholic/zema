import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';

import LikedJob from '../components/library/LikedJob';

class LinksScreen extends Component {
  static navigationOptions = {
    title: 'Liked Jobs',
  };

  _renderLikedJobs() {
    return this.props.likedJobs.map((job) => {
      return (
        <LikedJob key={job.id} item={job}/>
      );
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this._renderLikedJobs()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = (state) => {
  return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(LinksScreen)
