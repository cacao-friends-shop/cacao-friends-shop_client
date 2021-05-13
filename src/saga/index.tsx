import { combineReducers } from 'redux';
import { loginSaga, userSaga } from './User/saga';
import { LOG_IN, LOG_OUT, LOG_IN_FAILURE, PENDING } from './User/actions';
import userReducer from './User';
import { all, takeLatest } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([userSaga()]);
}

const appReducers = combineReducers({
  userReducer,
});

export default appReducers;
