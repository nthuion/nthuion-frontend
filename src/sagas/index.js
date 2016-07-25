import { fork } from 'redux-saga/effects';
import authSagas from './auth';
import questionSagas from './question';

export default function* rootSaga(store) {
  yield fork(authSagas);
  yield fork(questionSagas, store);
}

