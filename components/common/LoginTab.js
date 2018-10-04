
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';

const LoginTab = () => {

    return (
        <View style={styles.containerStyle}>
            <TouchableOpacity>
                <Text style={styles.bigTab}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.bigTab}>
                    Sign up
                </Text>
            </TouchableOpacity>
            
        </View>
    )

};

const styles = {
    containerStyle: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bigTab: {
        width: 150,
        margin: 16,
        padding: 10,
        fontSize: 26,
        color: Colors.tintColor
    }
};

export default LoginTab;
