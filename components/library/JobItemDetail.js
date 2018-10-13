import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { MapView } from 'expo';
// import Image from 'react-native-scalable-image';

import Colors from '../../constants/Colors';

class JobItemDetail extends Component {

  render() {

    const {
      id, jobId, jobTitle, company, city, country,
      formattedLocation, date, url, logitude, description,
      latitude, expired } = this.props.item;

    const initialRegion = {
      longitude: this.props.item.longitude,
      latitude: this.props.item.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02,
    }

    return (
      <View style={styles.detailContainer}>
        <View style={{ flex: 1, width: 300, height: 300 }}>
          <MapView
            style={{ flex: 1,  }}
            scrollEnabled={false}
            cacheEnabled={Platform.OS === 'android' ? true : false}
            initialRegion={initialRegion}
          >

          </MapView>
        </View>

        <View style={styles.jobDetailContainer}>
          <Text style={styles.title}>
            {jobTitle}
          </Text>
          <Text style={styles.author}>
            {company}
          </Text>
          <Text style={styles.description}>
            {description}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  detailContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  img: {
    margin: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  author: {
    color: Colors.secondaryText
  },
  jobDetailContainer: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    alignItems: 'center'
  },
  description: {
    margin: 10,
    padding: 10
  }
};

export default JobItemDetail;
