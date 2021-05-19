import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOG_IN,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  loginAction,
  SIGN_UP,
  signupAction,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from './actions';
import { loginRequest, signupRequest } from 'apis/User';
import {
  LoginSuccessInfo,
  LoginAction,
  SignupAction,
  SignupSuccessInfo,
} from 'types/User';

export function* loginSaga(action: ReturnType<typeof loginAction>) {
  const userInfo = action.userInfo;

  try {
    const user: LoginSuccessInfo = yield call(loginRequest, userInfo);
    yield put({ type: LOG_IN_SUCCESS, authUser: user });
  } catch (err) {
    yield put({ type: LOG_IN_FAILURE, error: err.message });
  }
}

export function* signupSaga(action: ReturnType<typeof signupAction>) {
  const userInfo = action.userInfo;
  const filteredUserInfo = Object.entries(userInfo).filter(
    (_, idx) => idx !== 1
  );
  const entries = new Map(filteredUserInfo);
  const newUserInfo = Object.fromEntries(entries);
  try {
    const res: SignupSuccessInfo = yield call(signupRequest, userInfo);
    yield put({ type: SIGN_UP_SUCCESS, authUser: newUserInfo });
  } catch (err) {
    yield put({ type: SIGN_UP_FAILURE, error: err.message });
  }
}

export function* userSaga() {
  yield takeLatest<LoginAction>(LOG_IN, loginSaga);
  yield takeLatest<SignupAction>(SIGN_UP, signupSaga);
}
