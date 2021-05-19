import { LoginInfo, LoginSuccessInfo, SignupUserInfo } from 'types/User';
import axios from 'axios';

export const emailConfirmRequest = async (email: string) => {
  try {
    const res = await axios.get(`/members/duplicated/${email}/checked-email`);
    return res;
  } catch (err) {
    return err.message;
  }
};
export const nicknameConfirmRequest = async (nickname: string) => {
  try {
    const res = await axios.get(
      `/members/duplicated/${nickname}/checked-nickname`
    );
    return res;
  } catch (err) {
    return err.message;
  }
};

export const loginRequest = async (userInfo: LoginInfo) => {
  try {
    const { data: user } = await axios.post<LoginSuccessInfo>(
      '/members/login',
      userInfo
    );
    return user;
  } catch (error) {
    return error.message;
  }
};

export const signupRequest = async (userInfo: SignupUserInfo) => {
  try {
    const { data: user } = await axios.post<SignupUserInfo>(
      '/members',
      userInfo
    );

    return user;
  } catch (error) {
    return error.message;
  }
};
