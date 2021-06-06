import { Action } from 'redux';

export type UserState = {
  authUser: User | null;
  isLoading: boolean;
  error: string | null;
};

export type User = {
  userId: string;
  nickname: string;
  phoneNumber: string;
  email: string;
  password: string;
  memberLevel: string;
  avatar: string;
};
export type UserUpdate = {
  nickname: string;
  memberLevel: string;
  email: string;
};

export type NicknameUpdate = {
  type: 'user/NICKNAME_UPDATE';
  nickname: string;
};

export type LoginInfo = {
  email: string;
  password: string;
};

export type LoginSuccessInfo = {
  email: string;
  memberLevel: string;
  nickname: string;
};

export type PandingAction = Action &
  LoginInfo & {
    type: 'user/PENDING';
  };

// export type LoginAction = Action &
//   LoginInfo & {
//     type: 'user/LOG_IN';
//     userInfo: LoginInfo;
//   };

export type LoginAction = Action & {
  type: 'user/LOG_IN';
  userInfo: LoginInfo;
};

export type LogoutAction = Action & {
  type: 'user/LOG_OUT';
};

//sign up
export type SignupUserInfo = {
  [key: string]: string;
};

export type SignupSuccessInfo = {
  email: string;
  nickname: string;
  phone: string;
};

export type SignupAction = Action &
  SignupUserInfo & {
    type: 'user/SIGN_UP';
    userInfo: SignupUserInfo;
  };

export type DeleteUser = {
  type: 'user/DELETE_USER';
  password: string;
};
