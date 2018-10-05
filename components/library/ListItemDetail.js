import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Image from 'react-native-scalable-image';
import Colors from '../../constants/Colors';
import * as actions from '../../actions';

class ListItemDetail extends Component {
  render() {

    const { title, image, userName } = this.props.item;

    return (
      <View style={styles.detailContainer}>
        <Image style={styles.img}
          width={350}
          height={250}
          source={{ uri: image }}
        />
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.author}>
          {userName}
        </Text>
      </View>
    );
  }
}

const styles = {
  detailContainer: {
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
  }
};

export default connect(null, actions)(ListItemDetail);
