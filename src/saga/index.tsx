import { combineReducers } from 'redux';
import { authSaga } from './User/saga';
import auth from './User';

import { all } from 'redux-saga/effects';

const appReducers = combineReducers({
  auth,
});

export function* rootSaga() {
  yield all([authSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default appReducers;
