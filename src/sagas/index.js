import { fork } from 'redux-saga/effects';
import authSagas from './auth';
import questionSagas from './question';
import commentSagas from './comment';

export default function* rootSaga(store) {
  yield fork(authSagas);
  yield fork(questionSagas, store);
  yield fork(commentSagas, store);
}

