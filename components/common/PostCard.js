import React from 'react';
import { View } from 'react-native';

const PostCard = (props) => {

    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

};

const styles = {
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 5
    }
};

export { PostCard };
