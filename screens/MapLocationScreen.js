import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { View,
  ActivityIndicator,
  StyleSheet,
  Platform
 } from 'react-native';
import { Button } from 'react-native-elements';

import window from '../constants/Layout';
import { fetchJobs } from '../actions';
import Colors from '../constants/Colors';


const DEVICE_WIDTH = window.window.width;


class MapLocationScreen extends Component {

  state = {
    mapLoaded: false,
    region: {
      latitude: 38,
      longitude: -122,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    }
  }

  _onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  _searchJobs = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('Jobs');
    });
  }

  render() {
    if (this.state.mapLoaded) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size='large'
            color={Colors.tintColor}
          />
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={this.state.region}
          onRegionChangeComplete={this._onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            rounded
            backgroundColor={Colors.tintColor}
            title={'Search Jobs'}
            icon={{ name: 'search' }}
            onPress={this._searchJobs}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    width: DEVICE_WIDTH,
    bottom: 30,
    left: 0,
    justifyContent: 'center'
  }
});

export default connect(null, { fetchJobs })(MapLocationScreen);
