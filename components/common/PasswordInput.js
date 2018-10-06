import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class PasswordInput extends Component {

    render() {
      const { label, placeholder, value, onChangeText } = this.props;
        return (
            <View style={styles.passwordInput}>
                <FormLabel>{label}</FormLabel>
                <FormInput value={value}
                    shake={true}
                    secureTextEntry
                    autoCorrect={false}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                />
                {/* <FormValidationMessage>Error message</FormValidationMessage> */}
            </View>
        );
    }
}

const styles = {
    passwordInput: {
        marginBottom: 10,
    }
};

export { PasswordInput };
