import React, { Component } from 'react';
import { View, Text, Platform,
  StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { Button } from 'react-native-elements';

import Colors from '../../constants/Colors';

class LikedJob extends Component {

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
        <View style={{ flex: 1, width: 150, height: 150 }}>
          <MapView
            style={{ flex: 1,  }}
            scrollEnabled={false}
            cacheEnabled={Platform.OS === 'android' ? true : false}
            initialRegion={initialRegion}
          >

          </MapView>
        </View>

        <View style={styles.jobDetailContainer}>
          <View style={styles.job}>
            <Text style={styles.title}>
              {jobTitle}
            </Text>
            <Text style={styles.author}>
              {company}
            </Text>
          </View>
          <Button style={styles.applyBtn}
            rounded
            backgroundColor={Colors.tintColor}
            title={'Apply'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: Colors.noticeText,
    shadowColor: Colors.textColor,
    shadowOffset: { width: 1, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
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
  job: {
    margin: 10
  },
  jobDetailContainer: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    // alignItems: 'center',
    justifyContent: 'space-around'
  },
  description: {
    margin: 10,
    padding: 10
  }
});

export default LikedJob;
