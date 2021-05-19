import { User, LoginInfo, SignupUserInfo } from 'types/User';

export const LOG_IN = 'user/LOG_IN';
export const LOG_OUT = 'user/LOG_OUT';
export const LOG_IN_SUCCESS = 'user/LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'user/LOG_IN_FAILURE';

export const SIGN_UP = 'user/SIGN_UP';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';

// action creator
//login
export const loginAction = (loginInfo: LoginInfo) => ({
  type: LOG_IN,
  userInfo: loginInfo,
});

export const loginSuccess = (authUser: User) => ({
  type: LOG_IN_SUCCESS,
  authUser,
});

export const loginFailure = (err: string) => ({
  type: LOG_IN_FAILURE,
  error: err,
});

// logout
export const logoutAction = () => ({
  type: LOG_OUT,
});

//signup
export const signupAction = (signupInfo: SignupUserInfo) => ({
  type: SIGN_UP,
  userInfo: signupInfo,
});

export const signupSuccess = (authUser: User) => ({
  type: SIGN_UP_SUCCESS,
  authUser,
});

export const signupFailure = (err: string) => ({
  type: SIGN_UP_FAILURE,
  error: err,
});
