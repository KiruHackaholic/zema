import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';
import jobsReducer from './JobsReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedItemId: SelectionReducer,
  authReducer: AuthReducer,
  jobsReducer
});
