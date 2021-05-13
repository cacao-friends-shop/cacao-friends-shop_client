import { User, LoginInfo } from 'types/User';

export const LOG_IN = 'user/LOG_IN';
export const LOG_OUT = 'user/LOG_OUT';
export const LOG_IN_SUCCESS = 'user/LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'user/LOG_IN_FAILURE';

// action creator

export const loginAction = (loginInfo: LoginInfo) => ({
  type: LOG_IN,
  userInfo: loginInfo,
});
export const loginSuccess = (authUser: User) => ({
  type: LOG_IN,
  authUser,
});

export const loginFailure = (err: any) => ({
  type: LOG_IN_FAILURE,
  error: err.message,
});
