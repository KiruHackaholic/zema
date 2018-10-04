import React from 'react';
import { Dimensions, View, Text,
    TouchableOpacity, Platform } from 'react-native';
import ButtonIcon from './ButtonIcon';
import PostCard from './PostCard';
import CardHeader from './CardHeader';
import Image from 'react-native-scalable-image';
import CardFooter from './CardFooter';

const PostDetail = ({ post }) => {
    
    const { profilePicture, userName, title, image, likes } = post;

    return (
        <PostCard style={styles.container}>
            
            <CardHeader>
                <View style={styles.headerContainer}>
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
                </View>
                <View>
                    <TouchableOpacity style={styles.iconButton}>
                        <ButtonIcon
                            name={Platform.OS === 'ios' ? `ios-more` : 'md-more'}
                        />
                    </TouchableOpacity>
                </View>
            </CardHeader>
            <Image
                width={Dimensions.get('window').width}
                source={{ uri: image }}
                indicator='bar'
            />
            <CardFooter>
                <View>
                    <TouchableOpacity style={styles.iconButton}>
                        <ButtonIcon
                            name={'ios-heart-outline'}
                        />
                    </TouchableOpacity>
                </View>
                <Text>{likes} Likes</Text>
            </CardFooter>
        </PostCard>
    );

};

const styles = {
    container: {
        flex: 1
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
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
    },
    iconButton: {
        padding: 8
    }
}

export default PostDetail;
