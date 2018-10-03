import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class ButtonIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        color={Colors.buttonIconDefault}
      />
    );
  }
}