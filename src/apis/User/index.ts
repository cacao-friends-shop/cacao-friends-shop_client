import { LoginInfo } from 'types/User';
import axios from 'axios';

export const loginRequest = (userInfo: LoginInfo) => {
  return axios({
    method: 'post',
    url: '/members/login',
    data: JSON.stringify(userInfo),
  });
};
