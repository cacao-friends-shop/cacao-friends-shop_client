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
  NICKNAME_UPDATE,
  UPDATE_USERINFO,
  USER_DELETE,
} from './actions';
import {
  loginRequest,
  signupRequest,
  logoutRequest,
  nicknameUpdateRequest,
  userDeleteRequest,
} from 'apis/User';
import {
  LoginSuccessInfo,
  LoginAction,
  SignupAction,
  LogoutAction,
  NicknameUpdate,
  DeleteUser,
} from 'types/User';

function* userDeleteSaga({ type, password }: DeleteUser) {
  try {
    const res: string = yield call(userDeleteRequest, password);
    yield put({ type: USER_DELETE, password });
    localStorage.removeItem('userInfo');
    return res;
  } catch (error) {
    alert('패스워드가 맞지 않습니다');
  }
}
function* updateUserInfoSaga(action: ReturnType<typeof loginAction>) {
  const user = action.userInfo;
  yield put({ type: UPDATE_USERINFO, authUser: user });
}

function* nicknameUpdateSaga({ type, nickname }: NicknameUpdate) {
  try {
    yield call(nicknameUpdateRequest, nickname);
    const userData = JSON.parse(localStorage.getItem('userInfo') || '{}');
    userData.nickname = nickname;
    localStorage.setItem('userInfo', JSON.stringify(userData));
    yield put({ type: NICKNAME_UPDATE, userData });
  } catch (error) {
    console.log(error);
  }
}
function* logoutSaga() {
  localStorage.removeItem('userInfo');
  yield call(logoutRequest);
  yield put({ type: LOG_OUT });
}

function* loginSaga(action: ReturnType<typeof loginAction>) {
  const userInfo = action.userInfo;
  try {
    const user: LoginSuccessInfo = yield call(loginRequest, userInfo);
    console.log(user);
    if (typeof user !== 'string') {
      yield put({ type: LOG_IN_SUCCESS, authUser: user });
      localStorage.setItem('userInfo', JSON.stringify(user));
    } else {
      throw new Error(user);
    }
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
  yield takeLatest<LoginAction>(UPDATE_USERINFO, updateUserInfoSaga);
  yield takeLatest(NICKNAME_UPDATE, nicknameUpdateSaga);
  yield takeLatest(USER_DELETE, userDeleteSaga);
}
