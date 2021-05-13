import { Action } from 'redux';

export type User = {
  userId: string;
  nickName: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
};

export type LoginInfo = {
  email: string;
  password: string;
};

export type LoginSuccessInfo = {
  email: string;
  role: string;
  nickname: string;
};

export type PandingAction = Action &
  LoginInfo & {
    type: 'PENDING';
  };
export type LoginAction = Action &
  LoginInfo & {
    type: 'LOG_IN';
    authUser: User;
  };
