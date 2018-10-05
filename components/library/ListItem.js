import React, { Component } from 'react';
import { View,
  Text,
  TouchableWithoutFeedback,
  Platform,
  UIManager,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import Image from 'react-native-scalable-image';
import Colors from '../../constants/Colors';
import * as actions from '../../actions';
import ListItemDetail from './ListItemDetail';

class ListItem extends Component {

  componentWillMount() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  _renderLibraryDetail() {

    const { item, expanded } = this.props;

    if (expanded) {
      return (
        <ListItemDetail item={item} />
      );
    }

  }

  render() {
    const { id, image, title, userName } = this.props.item;

    return(
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <View style={styles.item}>
            <Image style={styles.itemArt}
                width={40}
                height={50}
                source={{ uri: image }}
            />
            <View style={styles.itemDetail}>
              <Text style={styles.title}>
                { title }
              </Text>
              <Text style={styles.author}>
                { userName }
              </Text>
            </View>
          </View>
        </View>
        {this._renderLibraryDetail()}
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  container: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: Colors.dividerColor,
  },
  listContainer: {
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
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedItemId === ownProps.item.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
