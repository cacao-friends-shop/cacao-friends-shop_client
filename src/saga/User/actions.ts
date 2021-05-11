import { AuthError } from './index';
import { User } from 'types/User';

export const LOG_IN = 'auth/LOGIN';
export const SIGN_OUT = 'auth/SIGN_OUT';
export const LOG_IN_FAILURE = 'auth/LOG_IN_FAILURE';
export const PENDING = 'auth/PENDING';

// action creator
export const logInActionSuccess = (authUser: User) => ({
  type: LOG_IN,
  authUser,
});

export const loginActionFailure = (err: any) => ({
  type: LOG_IN_FAILURE,
  error: new AuthError(err.message, err.status),
});

const pending = () => ({
  type: PENDING,
  isLoading: true,
});

export const signOutAction = () => ({ type: SIGN_OUT });
export const loginAsync = () => ({ type: LOG_IN });
export const signOutAsync = () => ({ type: SIGN_OUT });
