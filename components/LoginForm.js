import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { emailChanged,
  passwordChanged,
  loginUser,
  facebookLogin } from '../actions';
import { TextInput, PasswordInput } from './common';
import Colors from '../constants/Colors';

class LoginForm extends Component {

    state = { username: '', password: '', error: '', loading: false };

    componentDidMount() {
      this.props.facebookLogin();
      this._onAuthComplete(this.props);
    }

    componentWillReceiveProps(nextProps) {
      this._onAuthComplete(nextProps);
    }

    _onAuthComplete(props) {
      if (props.token) {
        this.props.authenticationComplete();
      }
    }

    _userNameChanged(email) {
      this.props.emailChanged(email);
    }

    _passwordChanged(password) {
      this.props.passwordChanged(password);
    }

    _signin() {

        this.setState({error: '', loading: true});

        const { email, password } = this.props;

        this.props.loginUser({ email, password });

    }

    _loginWithFacebook = () => {
      this.props.facebookLogin();
    }

    _renderError() {
      const { error } = this.props;
      if (error) {
        return (
          <Text style={styles.errorMessage}>
            {error}
          </Text>
        );
      }
    }

    _renderButton() {
      const { loading } = this.props;
        if (loading) {
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
                {this._renderError()}
                <View>
                    <TextInput value={this.state.username}
                        label={'Username'}
                        placeholder={'Enter your email'}
                        onChangeText={this._userNameChanged.bind(this)}
                        value={this.props.email}
                    />
                    <PasswordInput value={this.state.password}
                        label={'Password'}
                        placeholder={'Enter your password'}
                        onChangeText={this._passwordChanged.bind(this)}
                        value={this.props.password}
                    />
                </View>
                <View>
                    {this._renderButton()}
                </View>

                <View style={styles.divider}>
                    <Text>OR CONNECT WITH</Text>
                </View>

                <View style={styles.socialLogin}>
                <Button
                  large
                  rounded
                  title='FACEBOOK'
                  onPress={this._loginWithFacebook}
                />
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
    },
    socialLogin: {
    }
};

const mapStateToProps = ({ authReducer }) => {
  const { email, password, loading, error, token } = authReducer;
  return { email, password, loading, error, token };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  facebookLogin
})(LoginForm);
