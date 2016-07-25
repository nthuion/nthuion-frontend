import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import {
  SEND_COMMENT,
  FETCH_COMMENTS,
} from '../containers/CommentForm/actionTypes';
import {
  fetchCommentsSuccess,
} from '../containers/CommentForm/actions';

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

function* fetchComments({ qid }) {
  try {
    const { data } = yield call(api.get, `/api/questions/${qid}/comments`);
    yield put(fetchCommentsSuccess(qid, data));
  } catch (err) {
    //
  }
}

function* watchFetchComments() {
  yield* takeEvery(FETCH_COMMENTS, fetchComments);
}

export default function* commentSagas(store) {
  yield fork(watchSendComment, store);
  yield fork(watchFetchComments);
}

