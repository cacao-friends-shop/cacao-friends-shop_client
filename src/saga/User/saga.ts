import { Dispatch } from 'react';
import { call, put } from 'redux-saga/effects';
import { LOG_IN, SIGN_OUT, LOG_IN_FAILURE, PENDING } from './actions';
import { loginRequest } from 'apis/User';
import { LoginInfo, LoginSuccessInfo } from 'types/User';

export function* loginSaga(userInfo: LoginInfo) {
  yield put({ type: PENDING });
  try {
    const user: LoginSuccessInfo = yield call(loginRequest, userInfo);
    console.log(user);
    // yield put({ type: LOG_IN, authUser: user });
  } catch (error) {
    yield put({ type: LOG_IN_FAILURE, error });
  }
}

export function* userSaga() {
  // yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
  // yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}

// thunk
// export const logInActionAsync = (userInfo: LoginInfo) => async (
//   dispatch: Dispatch<MyDispatch>
// ) => {
//   // 비동기 처리
//   dispatch(pending());
//   try {
//     const res = await loginRequest(userInfo).then(res => res.json());
//     dispatch(logInActionSuccess(res.user));
//   } catch (err) {
//     dispatch(loginActionFailure(err));
//   }

//   return dispatch;
// };
