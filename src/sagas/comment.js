import { takeEvery } from 'redux-saga';
import { call, fork } from 'redux-saga/effects';
import api from '../utils/api';
import {
  SEND_COMMENT,
} from '../containers/CommentForm/actionTypes';

function* sendComment(store, { qid, content }) {
  try {
    const apiToken = store.getState().auth.apiToken;
    yield call(api.post, `/api/questions/${qid}/comments`, apiToken, { content });
  } catch (err) {
    //
  }
}

function* watchSendComment(store) {
  yield* takeEvery(SEND_COMMENT, sendComment, store);
}

export default function* commentSagas(store) {
  yield fork(watchSendComment, store);
}

