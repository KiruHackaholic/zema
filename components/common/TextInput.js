import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class TextInput extends Component {

    render() {
        return (
            <View style={styles.textInput}>
                <FormLabel>{this.props.label}</FormLabel>
                <FormInput value={this.props.value}
                    shake={true}
                    autoCorrect={false}
                    onChangeText={this.props.onChangeText}
                />
                {/* <FormValidationMessage>Error message</FormValidationMessage> */}
            </View>
        );
    }
}

const styles = {
    textInput: {
        marginBottom: 10,
    }
};

export { TextInput };
