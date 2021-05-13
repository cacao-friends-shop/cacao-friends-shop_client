import { Dispatch } from 'react';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_FAILURE, LOG_IN_SUCCESS } from './actions';
import { loginRequest } from 'apis/User';
import { LoginSuccessInfo, LoginAction } from 'types/User';
import { loginAction } from 'modules/User/actions';

export function* loginSaga(action: ReturnType<typeof loginAction>) {
  const userInfo = action.userInfo;

  try {
    const user: LoginSuccessInfo = yield call(loginRequest, userInfo);
    yield put({ type: LOG_IN_SUCCESS, authUser: user });
  } catch (err) {
    yield put({ type: LOG_IN_FAILURE, error: err.message });
  }
}

export function* userSaga() {
  yield takeLatest<LoginAction>(LOG_IN, loginSaga);
}
