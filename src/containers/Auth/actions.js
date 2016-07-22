import { createAction } from 'redux-actions';

export const fbLogin = createAction('FB_LOGIN');
export const fbLoginSuccess = (token) => ({
  type: 'FB_LOGIN_SUCCESS',
  token,
});
export const fbLoginFail = (error) => ({
  type: 'FB_LOGIN_FAIL',
  error,
});

