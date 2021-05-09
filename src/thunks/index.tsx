import { combineReducers } from 'redux';
import authReducer from './auth';

const appReducers = combineReducers({
  auth: authReducer,
});

export default appReducers;
