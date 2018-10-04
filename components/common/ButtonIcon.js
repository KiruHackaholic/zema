import React, { Component } from 'react';
import { Icon } from 'expo';

import Colors from '../../constants/Colors';

class ButtonIcon extends Component {
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

export { ButtonIcon }
