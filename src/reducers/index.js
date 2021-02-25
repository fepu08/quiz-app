import { combineReducers } from 'redux';
import userReducer from './userReducer';
import alertReducer from './alertReducer';
import questionReducer from './questionReducer';

export default combineReducers({
  user: userReducer,
  alerts: alertReducer,
  questions: questionReducer
});
