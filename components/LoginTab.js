
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import LoginForm from './LoginForm';

class LoginTab extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.tabContainerStyle}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.bigTab}>
                            Sign in
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigator.navigate('Auth')}>
                        <Text style={styles.bigTab}>
                            Registration
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.loginForm}>
                    <LoginForm />
                </View>

            </View>
        );
    }

};

const styles = {
    containerStyle: {
    },
    tabContainerStyle: {
        padding: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bigTab: {
        width: 150,
        margin: 10,
        padding: 10,
        fontSize: 26,
        color: Colors.tintColor
    },
    loginForm: {
    }
};

export default LoginTab ;
