import { fork } from 'redux-saga/effects';
import authSagas from './auth';
import createItemSaga from './create-item';
import itemListSaga from './item-list';
import itemDetailSaga from './item-detail';
import commentSagas from './comment';

export default function* rootSaga(store) {
  yield fork(authSagas);
  yield fork(createItemSaga, store);
  yield fork(itemListSaga, store);
  yield fork(itemDetailSaga, store);
  yield fork(commentSagas, store);
}

