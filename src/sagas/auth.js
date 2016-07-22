import { call, take } from 'redux-saga/effects';
import FacebookSDK from '../utils/FacebookSDK';

function* fbLoginFlow() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take('FB_LOGIN');
    const response = yield call(FacebookSDK.login);
    console.log(response);
  }
}

export default function* auth() {
  yield call(fbLoginFlow);
}

