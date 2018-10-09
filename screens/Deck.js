import React, { Component } from 'react';
import { View,
  Animated,
  PanResponder,
  LayoutAnimation,
  UIManager
 } from 'react-native';
 import window from '../constants/Layout'
import Colors from '../constants/Colors';


const DEVICE_WIDTH = window.window.width;
const SWIPE_THRESHOLD = 0.25* DEVICE_WIDTH;
const SWIPE_OUT_DURATION = 250;

class Deck extends Component {

  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {},
    noMoreCards: () => {}
  };

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this._forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this._forceSwipe('left');
        } else {
          this._resetPosition();
        }
      }
    });

    this._panResponder = panResponder;
    this._position = position;
    this.state = { index: 0 };
  }

  componentWillMount() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  componentWillUpdate() {
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.data !== this.props.data) {
      this.setState({ index: 0 });
    }

  }

  _forceSwipe(direction) {
    const x = direction === 'right' ? DEVICE_WIDTH : -DEVICE_WIDTH;

    Animated.timing(this._position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(this._onSwipeComplete(direction));
  }

  _onSwipeComplete(direction) {
    const { onSwipeRight, onSwipeLeft, data } = this.props;
    const item = data[this.state.index];

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    setTimeout(() => {
      this._position.setValue({ x: 0, y: 0 });
      this.setState({ index: this.state.index + 1 });
      LayoutAnimation.spring();
    }, 0);

  }

  _resetPosition() {
    Animated.spring(this._position, {
      toValue: { x: 0, y: 0 },
    }).start();
  }

  _getCardStyle() {
    const rotate = this._position.x.interpolate({
      inputRange: [-DEVICE_WIDTH * 1.5, 0, DEVICE_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return {
      ...this._position.getLayout(),
      transform: [{ rotate }],
    }
  }

  _renderCards() {

    const { data, noMoreCards } = this.props;

    if (this.state.index == data.length) {
      return noMoreCards();
    }

    return data.map((item, i) => {
      if (i < this.state.index) { return null; }
      if (i === this.state.index) {
        return (
          <Animated.View
            key={item.id}
            style={[this._getCardStyle(), styles.cardStyle, { elevation: 3 }]}
            {...this._panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return (
        <Animated.View key={item.id}
          style={[styles.cardStyle,
            { top: 10 * (i - this.state.index)}]}>
          {this.props.renderCard(item)}
        </Animated.View>
      );
    }).reverse();
  }

  render() {
    return (
      <View>
        {this._renderCards()}
      </View>
    );
  }
};

const styles = {
  detailContainer: {
    padding: 20,
    alignItems: 'center'
  },
  cardStyle: {
    position: 'absolute',
    width: DEVICE_WIDTH,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: Colors.noticeText,
    shadowColor: Colors.textColor,
    shadowOffset: { width: 1, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 20
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

export default Deck;
