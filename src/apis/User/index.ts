import { LoginInfo } from 'types/User';

export const loginRequest = (userInfo: LoginInfo) => {
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
