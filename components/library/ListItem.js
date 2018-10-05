import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Image from 'react-native-scalable-image';
import Colors from '../../constants/Colors';

class ListItem extends Component {
  render() {
    return(
      <View style={styles.listContainer}>
        <View style={styles.item}>
          <Image style={styles.itemArt}
              width={40}
              height={50}
              source={{ uri: this.props.item.image }}
          />
          <View style={styles.itemDetail}>
            <Text style={styles.title}>{this.props.item.title}</Text>
            <Text style={styles.author}>{this.props.item.userName}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  listContainer: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: Colors.dividerColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemArt: {
    marginRight: 16
  },
  itemDetail: {

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  author: {
    color: Colors.secondaryText
  }
}

export default ListItem;
