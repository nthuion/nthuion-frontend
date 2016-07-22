import { call } from 'redux-saga/effects';
import auth from './auth';

export default function* rootSaga() {
  yield call(auth);
}

