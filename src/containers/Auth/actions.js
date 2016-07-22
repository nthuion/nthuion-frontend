import { createAction } from 'redux-actions';

export const fbLogin = createAction('FB_LOGIN');
export const fbLoginSuccess = (fbToken) => ({
  type: 'FB_LOGIN_SUCCESS',
  fbToken,
});
export const fbLoginFail = createAction('FB_LOGIN_FAIL');

export const apiLoginSuccess = (apiToken) => ({
  type: 'API_LOGIN_SUCCESS',
  apiToken,
});
export const apiLoginFail = createAction('API_LOGIN_FAIL');

