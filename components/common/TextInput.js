import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class TextInput extends Component {

    render() {
      const { label, placeholder, value, onChangeText } = this.props;
        return (
            <View style={styles.textInput}>
                <FormLabel>{label}</FormLabel>
                <FormInput value={value}
                    shake={true}
                    placeholder={placeholder}
                    autoCorrect={false}
                    onChangeText={onChangeText}
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
