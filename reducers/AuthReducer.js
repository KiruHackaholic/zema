import { EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  FACEBOOK_LOGIN_FAILED,
  FACEBOOK_LOGIN_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  token: null,
  user: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {

    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER:
      return { ...state, loading: true, error: '' }

    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };

    case LOGIN_USER_FAILED:
      return { ...state, error: 'Authentication failed!', password: '', loading: false };

    case FACEBOOK_LOGIN_SUCCESS:
      return { ...state, token: action.payload };

    case FACEBOOK_LOGIN_FAILED:
      return { ...state, token: null }

    default:
      return state;

  }

};
