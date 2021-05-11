import { AuthError } from 'saga/User/index';

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

export type MyDispatch = {
  type: string;
  authUser?: User;
  isLoading?: boolean;
  error?: AuthError;
};
