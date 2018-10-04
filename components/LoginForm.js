import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput, PasswordInput } from './common';
import Colors from '../constants/Colors';

class LoginForm extends Component {

    state = { username: '', password: '' };

    render() {
        return (
            <View style={styles.containerStyle}>
                <View>
                    <TextInput value={this.state.username}
                        label={'Username'}
                        onChangeText={username => this.setState({ username })}
                    />
                    <PasswordInput value={this.state.password}
                        label={'Password'}
                        onChangeText={password => this.setState({ password })}
                    />
                </View>
                <Button
                    large
                    rounded
                    backgroundColor={Colors.tintColor}
                    title='SIGN IN' />
                
                <View style={styles.divider}>
                    <Text>OR CONNECT WITH</Text>
                </View>

                <View style={styles.socialLogin}>

                </View>

            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flexDirection: 'column',
        marginTop: 20,
        maxWidth: 400,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 10,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    textInput: {
        marginBottom: 10,

    },
    divider: {
        display: 'none'
    },
    socialLogin: {
        display: 'none'
    }
};

export default LoginForm;
