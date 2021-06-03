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
  LOG_OUT,
} from './actions';
import { loginRequest, signupRequest, logoutRequest } from 'apis/User';
import {
  LoginSuccessInfo,
  LoginAction,
  SignupAction,
  LogoutAction,
} from 'types/User';

function* logoutSaga() {
  localStorage.removeItem('userInfo');
  yield call(logoutRequest);
  yield put({ type: LOG_OUT });
}

function* loginSaga(action: ReturnType<typeof loginAction>) {
  const userInfo = action.userInfo;
  console.log(userInfo);
  try {
    const user: LoginSuccessInfo = yield call(loginRequest, userInfo);
    yield put({ type: LOG_IN_SUCCESS, authUser: user });
    localStorage.setItem('userInfo', JSON.stringify(user));
  } catch (err) {
    yield put({ type: LOG_IN_FAILURE, error: err.message });
  }
}

function* signupSaga(action: ReturnType<typeof signupAction>) {
  const userInfo = action.userInfo;
  const filteredUserInfo = Object.entries(userInfo).filter(
    (_, idx) => idx !== 1
  );
  const entries = new Map(filteredUserInfo);
  const newUserInfo = Object.fromEntries(entries);
  try {
    yield call(signupRequest, userInfo);
    yield put({ type: SIGN_UP_SUCCESS, authUser: newUserInfo });
    localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
  } catch (err) {
    yield put({ type: SIGN_UP_FAILURE, error: err.message });
  }
}

export function* userSaga() {
  yield takeLatest<LoginAction>(LOG_IN, loginSaga);
  yield takeLatest<SignupAction>(SIGN_UP, signupSaga);
  yield takeLatest<LogoutAction>(LOG_OUT, logoutSaga);
}
