import {
  FB_LOGIN,
  FB_LOGIN_SUCCESS,
  FB_LOGIN_FAIL,
  API_LOGIN_SUCCESS,
  API_LOGIN_FAIL,
  FETCH_ME,
  FETCH_ME_SUCCESS,
  FETCH_ME_FAIL,
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

export const fetchMe = () => ({ type: FETCH_ME });

export const fetchMeSuccess = (me) => ({
  type: FETCH_ME_SUCCESS,
  me,
});

export const fetchMeFail = (error) => ({
  type: FETCH_ME_FAIL,
  error,
});

