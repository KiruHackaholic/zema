import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class PasswordInput extends Component {

    render() {
        return (
            <View style={styles.passwordInput}>
                <FormLabel>{this.props.label}</FormLabel>
                <FormInput value={this.props.value}
                    shake={true}
                    secureTextEntry
                    autoCorrect={false}
                    onChangeText={this.props.onChangeText}
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
