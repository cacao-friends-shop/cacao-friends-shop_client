import { Dispatch } from 'react';
import { delay, put } from 'redux-saga/effects';

export function* authSaga() {
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
