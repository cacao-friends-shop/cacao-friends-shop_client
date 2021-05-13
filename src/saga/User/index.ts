import { User } from 'types/User';
import { LOG_IN, LOG_OUT, LOG_IN_FAILURE, LOG_IN_SUCCESS } from './actions';

const initialState = {
  authUser: null,
  isLoading: false,
  error: '',
};

const userReducer = (
  state = initialState,
  action: {
    type: string;
    authUser?: User;
    error?: string;
  }
) => {
  switch (action.type) {
    // 로그인
    case LOG_IN:
      return {
        ...state,
        isLoading: true,
      };
    // LOG_IN_SUCCESS
    case LOG_IN_SUCCESS:
      return {
        ...state,
        authUser: action.authUser,
        isLoading: false,
      };
    // LOG_IN_FAILURE
    case LOG_IN_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    // 로그아웃 (기본 처리)
    case LOG_OUT:
      return initialState;
    // 기본 (초기 상태)
    default:
      return state;
  }
};

export default userReducer;
