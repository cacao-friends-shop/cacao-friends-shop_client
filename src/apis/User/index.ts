import { LoginInfo, LoginSuccessInfo } from 'types/User';
import axios from 'axios';

export const loginRequest = async (userInfo: LoginInfo) => {
  const { data: user } = await axios.post<LoginSuccessInfo>(
    '/members/login',
    userInfo
  );
  return user;
};
