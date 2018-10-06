import firebase from 'firebase';
import { SELECT_LIBRARY,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from './types';

export const selectLibrary = (itemId) => {

  return {
    type: SELECT_LIBRARY,
    payload: itemId,
  };
};

export const emailChanged = (email) => {

  return {
    type: EMAIL_CHANGED,
    payload: email,
  };
};

export const passwordChanged = (password) => {

  return {
    type: PASSWORD_CHANGED,
    payload: password
  }
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {

    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword( email, password )
    .then((user) => userLoginSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword( email, password )
      .then((user) => userLoginSuccess(dispatch, user))
      .catch(() => userLoginFail(dispatch));
    });
  };

};

const userLoginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

const userLoginFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAILED
  });
};
