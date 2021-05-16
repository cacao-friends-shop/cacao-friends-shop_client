import { LoginInfo, LoginSuccessInfo, SignupUserInfo } from 'types/User';
import axios from 'axios';

export const loginRequest = async (userInfo: LoginInfo) => {
  const { data: user } = await axios.post<LoginSuccessInfo>(
    '/members/login',
    userInfo
  );
  return user;
};

export const signupRequest = async (userInfo: SignupUserInfo) => {
  const { data: user } = await axios.post<SignupUserInfo>(
    '/members/login',
    userInfo
  );
  return user;
};
