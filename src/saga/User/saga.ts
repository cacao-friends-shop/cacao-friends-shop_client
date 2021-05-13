import { Dispatch } from 'react';

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_FAILURE } from './actions';
import { loginRequest } from 'apis/User';
import { LoginInfo, LoginSuccessInfo, LoginAction } from 'types/User';
import { loginAction } from 'saga/User/actions';

export function* loginSaga(action: ReturnType<typeof loginAction>) {
  const userInfo = action.userInfo;

  try {
    const user: LoginSuccessInfo = yield call(loginRequest, userInfo);
    console.log('test');
    yield put({ type: LOG_IN, authUser: user });
    console.log('test1');
  } catch (error) {
    console.log('test2');
    yield put({ type: LOG_IN_FAILURE, error });
  }
}

export function* userSaga() {
  yield takeLatest<LoginAction>(LOG_IN, loginSaga);
}
