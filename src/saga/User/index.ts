import { User } from 'types/User';
import { LOG_IN, SIGN_OUT, LOG_IN_FAILURE, PENDING } from './actions';

export class AuthError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

const initialState = {
  authUser: null,
  isLoading: false,
  error: AuthError,
};

const userReducer = (
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

export default userReducer;
