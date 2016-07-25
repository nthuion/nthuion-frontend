import {
  FB_LOGIN,
  FB_LOGIN_SUCCESS,
  FB_LOGIN_FAIL,
  API_LOGIN_SUCCESS,
  API_LOGIN_FAIL,
} from './actionTypes';

export const fbLogin = () => ({ type: FB_LOGIN });
export const fbLoginSuccess = (fbToken) => ({
  type: FB_LOGIN_SUCCESS,
  fbToken,
});
export const fbLoginFail = (error) => ({
  type: FB_LOGIN_FAIL,
  error,
});

export const apiLoginSuccess = (apiToken) => ({
  type: API_LOGIN_SUCCESS,
  apiToken,
});
export const apiLoginFail = (error) => ({
  type: API_LOGIN_FAIL,
  error,
});

