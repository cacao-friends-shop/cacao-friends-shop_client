import { combineReducers } from 'redux';
import { userSaga } from './User/saga';
import userReducer from './User';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([userSaga()]);
}

const appReducers = combineReducers({
  userReducer,
});

export default appReducers;
