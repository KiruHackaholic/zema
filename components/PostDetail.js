import React from 'react';
import { Dimensions, View, Text, TouchableOpacity } from 'react-native';
import PostCard from './PostCard';
import CardHeader from './CardHeader';
import Image from 'react-native-scalable-image';


const PostDetail = ({ post }) => {
    
    const { profilePicture, userName, title, image } = post;

    return (
        <PostCard style={styles.container}>
            <TouchableOpacity>
                <CardHeader>
                    <View>
                        <Image style={styles.avatar}
                            width={40}
                            height={40}
                            source={{ uri: profilePicture }}
                        />
                    </View>
                    <View style={styles.headerTitle}>
                        <Text style={styles.profileName}>
                            {userName}
                        </Text>
                    </View>
                </CardHeader>
            </TouchableOpacity>
            <Image
                width={Dimensions.get('window').width}
                source={{ uri: image }}
            />
        </PostCard>
    );

};

const styles = {
    container: {
        flex: 1
    },
    headerTitle: {
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    avatar: {
        borderRadius: 20,
        marginRight: 10
    },
    profileName: {
        fontSize: 14,
        fontWeight: 'bold'
    }
}

export default PostDetail;
