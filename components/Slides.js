import React from 'react';
import { View,
  Text,
  StyleSheet,
  ScrollView } from 'react-native';
  import { Button } from 'react-native-elements';

import window from '../constants/Layout';
import Colors from '../constants/Colors';

const DEVICE_WIDTH = window.window.width;

class Slides extends React.Component {

  componentWillMount() {
  }

  componentWillUpdate() {
  }

  _renderButton(i) {
    if (i === this.props.data.length - 1) {
      return (
        <Button
          large
          buttonStyle={styles.buttonStyle}
          backgroundColor={Colors.textColor}
          onPress={this.props.onSlideComplete}
          title='Start'
        />
      );
    }
  }

  _renderSlides() {
    return this.props.data.map((slide, i) => {
      return (
      <View key={slide.title}
        style={[ styles.slide, { backgroundColor: slide.color } ]}
      >
        <Text style={styles.slideTitle}>{slide.title}</Text>
        {this._renderButton(i)}
      </View>
      );
    })
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        bounces
        style={{ flex: 1 }}
      >
        {this._renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  slide: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE_WIDTH
  },
  slideTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primaryBackground
  },
  buttonStyle: {
      height: 40,
      marginTop: 40,
      width: 150
  },
});

export default Slides;
