import { Dispatch } from 'react';

const LOG_IN = 'auth/LOGIN';
const SIGN_OUT = 'auth/SIGN_OUT';
const LOG_IN_FAILURE = 'auth/LOG_IN_FAILURE';
const PENDING = 'auth/PENDING';

type User = {
  userId: string;
  nickName: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
};

type LoginInfo = {
  email: string;
  password: string;
};

class AuthError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

//api
const loginRequest = (userInfo: LoginInfo) => {
  return fetch('/members/login', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });
};

type MyDispatch = {
  type: string;
  authUser?: User;
  isLoading?: boolean;
  error?: AuthError;
};

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

// thunk
export const logInActionAsync = (userInfo: LoginInfo) => async (
  dispatch: Dispatch<MyDispatch>
) => {
  // 비동기 처리
  dispatch(pending());
  try {
    const res = await loginRequest(userInfo).then(res => res.json());
    dispatch(logInActionSuccess(res.user));
  } catch (err) {
    dispatch(loginActionFailure(err));
  }

  return dispatch;
};

const initialState = {
  authUser: null,
  isLoading: false,
  error: AuthError,
};

export const authReducer = (
  state = initialState,
  action: {
    type: string;
    authUser?: User;
    error?: AuthError;
  }
) => {
  switch (action.type) {
    // 로그인
    case LOG_IN:
      return {
        ...state,
        authUser: action.authUser,
        isLoading: false,
      };

    // 로그아웃 (기본 처리)
    case SIGN_OUT:
      return initialState;

    // LOG_IN_FAILURE
    case LOG_IN_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    // PENDING
    case PENDING:
      return {
        ...state,
        isLoading: true,
      };
    // 기본 (초기 상태)
    default:
      return state;
  }
};

export default authReducer;
