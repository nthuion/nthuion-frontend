import { fork } from 'redux-saga/effects';
import authSagas from './auth';
import questionListSagas from './question-list';
import questionDetailSagas from './question-detail';
import commentSagas from './comment';

export default function* rootSaga(store) {
  yield fork(authSagas);
  yield fork(questionListSagas, store);
  yield fork(questionDetailSagas, store);
  yield fork(commentSagas, store);
}

