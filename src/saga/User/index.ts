import { LoginInfo, User } from 'types/User';
import { LOG_IN, SIGN_OUT, LOG_IN_FAILURE, PENDING } from './actions';

export class AuthError extends Error {
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
