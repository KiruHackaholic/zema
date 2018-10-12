import React, { Component } from 'react';
import { View, } from 'react-native';
import axios from 'axios';
import { PostDetail } from '.';

class PostsList extends Component {

    state = { posts: [] }

    componentWillMount() {
      this._getRecentPosts();
    }

    renderPosts() {
        return this.state.posts.map(post =>
            <PostDetail key={post.id} post={post}/>
        );
    }

    render() {
        return (
            <View>
                {this.renderPosts()}
            </View>
        );
    }

    _getRecentPosts() {
        axios.get('http://192.168.0.16:3000/posts')
            .then(response => this.setState({ posts: response.data }));
    }
}

export { PostsList };
