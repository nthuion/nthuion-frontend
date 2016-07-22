import { fork } from 'redux-saga/effects';
import auth from './auth';
import question from './question';

export default function* rootSaga() {
  yield fork(auth);
  yield fork(question);
}

