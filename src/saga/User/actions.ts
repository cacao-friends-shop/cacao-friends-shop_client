import { AuthError } from './index';
import { User, LoginInfo } from 'types/User';

export const LOG_IN = 'USER/LOGIN';
export const LOG_OUT = 'USER/SIGN_OUT';
export const LOG_IN_SUCCESS = 'USER/LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'USER/LOG_IN_FAILURE';
export const PENDING = 'USER/PENDING';

// action creator
export const logInActionSuccess = (authUser: User) => ({
  type: LOG_IN,
  authUser,
});

export const loginActionFailure = (err: any) => ({
  type: LOG_IN_FAILURE,
  error: new AuthError(err.message, err.status),
});

export const pending = () => ({
  type: PENDING,
  isLoading: true,
});

export const signOutAction = () => ({ type: LOG_OUT });
export const loginAsync = (authUser: LoginInfo) => ({ type: LOG_IN, authUser });
export const signOutAsync = () => ({ type: LOG_OUT });
