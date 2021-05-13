import { Dispatch } from 'react';

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { LOG_IN, LOG_OUT, LOG_IN_FAILURE, PENDING } from './actions';
import { loginRequest } from 'apis/User';
import {
  LoginInfo,
  LoginSuccessInfo,
  PandingAction,
  LoginAction,
} from 'types/User';

export function* loginSaga(userInfo: LoginInfo) {
  yield put({ type: PENDING });
  try {
    const user: LoginSuccessInfo = yield call(loginRequest, userInfo);
    console.log(user);
    yield put({ type: LOG_IN, authUser: user });
  } catch (error) {
    yield put({ type: LOG_IN_FAILURE, error });
  }
}

export function* userSaga() {
  // yield takeEvery<PandingAction>(PENDING, loginSaga);
  yield takeLatest<LoginAction>(LOG_IN, loginSaga);
}
