import { call, take, put } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import api from '../utils/api';
import FacebookSDK from '../utils/FacebookSDK';
import {
  fbLoginSuccess,
  fbLoginFail,
  apiLoginSuccess,
  apiLoginFail,
} from '../containers/Auth/actions';

function apiLogin(fbToken) {
  return api.post('/api/login/facebook', { token: fbToken });
}

function* fbLoginFlow() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take('FB_LOGIN');
    const response = yield call(FacebookSDK.login);
    if (!response.authResponse) {
      yield put(fbLoginFail());
      continue;
    }
    const fbToken = response.authResponse.accessToken;
    yield put(fbLoginSuccess(fbToken));
    try {
      const { token } = yield call(apiLogin, fbToken);
      yield put(apiLoginSuccess(token));
      yield put(replace('/'));
    } catch (err) {
      yield put(apiLoginFail());
    }
  }
}

export default function* auth() {
  yield call(fbLoginFlow);
}

