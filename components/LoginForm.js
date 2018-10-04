import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';
import { TextInput, PasswordInput } from './common';
import Colors from '../constants/Colors';

class LoginForm extends Component {

    state = { username: '', password: '', error: '', loading: false };

    _signin() {

        this.setState({error: '', loading: true});

        const { username, password } = this.state;

        firebase.auth().signInWithEmailAndPassword( username, password )
            .then(this._onSigninSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(username, password)
                    .then(this._onSigninSuccess.bind(this))
                    .catch(() => {
                        this.setState({error: 'Authentication failed.', loading: false})
                    });
            });
    }

    _onSigninSuccess() {
        this.setState({
            error: '',
            username: '',
            password: '',
            loading: false
        })
    }

    _renderButton() {
        if (this.state.loading) {
            return <Button buttonStyle={styles.buttonStyle}
                        rounded
                        backgroundColor={Colors.tintColor}
                        loading
                        loadingRight={true} />;
        } return (
            <Button buttonStyle={styles.buttonStyle}
                rounded
                backgroundColor={Colors.tintColor}
                onPress={this._signin.bind(this)}
                title='SIGN IN' />
        );
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.errorMessage}>
                    {this.state.error}
                </Text>
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
                <View>
                    {this._renderButton()}
                </View>
                
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
        marginTop: 5,
        maxWidth: 400,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 10,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    errorMessage: {
        padding: 10,
        borderRadius: 4,
        alignSelf: 'center',
        color: Colors.errorBackground
    },
    textInput: {
        marginBottom: 10,
    },
    buttonStyle: {
        height: 40
    },
    divider: {
        display: 'none'
    },
    socialLogin: {
        display: 'none'
    }
};

export default LoginForm;
