import { takeEvery } from 'redux-saga';
import { call, fork, take, put } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import api from '../utils/api';
import FacebookSDK from '../utils/FacebookSDK';
import {
  FB_LOGIN,
  FETCH_ME,
} from '../containers/Auth/actionTypes';
import {
  fbLoginSuccess,
  fbLoginFail,
  apiLoginSuccess,
  apiLoginFail,
  fetchMe,
  fetchMeSuccess,
  fetchMeFail,
} from '../containers/Auth/actions';

function apiLogin(fbToken) {
  return api.post('/api/login/facebook', null, { token: fbToken });
}

function* fbLoginFlow() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take(FB_LOGIN);
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
      yield put(fetchMe());
      yield put(replace('/'));
    } catch (error) {
      yield put(apiLoginFail(error));
    }
  }
}

function* apiFetchMe(store) {
  try {
    const apiToken = store.getState().auth.apiToken;
    const me = yield call(api.get, '/api/users/me', apiToken);
    yield put(fetchMeSuccess(me));
  } catch (error) {
    yield put(fetchMeFail(error));
  }
}

function* watchFetchMe(store) {
  yield* takeEvery(FETCH_ME, apiFetchMe, store);
}

export default function* authSagas(store) {
  yield fork(fbLoginFlow);
  yield fork(watchFetchMe, store);
}

