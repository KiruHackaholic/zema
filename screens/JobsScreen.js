import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import Swipe from '../components/Swipe';
import JobItemDetail from '../components/library/JobItemDetail';
import { likeJob } from '../actions';

class JobsScreen extends Component {

  _renderCard(job) {
    return (
      <JobItemDetail key={job.id} item={job}/>
    );
  }

  _renderNoMoreCards() {
    return (
      <Text>All caught up!!!</Text>
    );
  }

  _onSwipeRight() {
  }

  _onSwipeLeft() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Swipe
          data={this.props.jobs}
          renderCard={this._renderCard}
          renderNoMoreCards={this._renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = ({ jobReducer }) => {
  return { jobs: jobReducer.results };
};

export default connect(mapStateToProps, { likeJob })(JobsScreen);
