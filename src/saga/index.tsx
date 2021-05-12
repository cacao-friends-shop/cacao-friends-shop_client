import { combineReducers } from 'redux';
import { loginSaga, userSaga } from './User/saga';
import { LOG_IN, SIGN_OUT, LOG_IN_FAILURE, PENDING } from './User/actions';
import userReducer from './User';
import { all, takeLatest } from 'redux-saga/effects';

export function* rootSaga() {
  // yield takeLatest(, loginSaga); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

const appReducers = combineReducers({
  userReducer,
});

export default appReducers;
