import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import {
  SEND_COMMENT,
} from '../containers/CommentForm/actionTypes';
import {
  sendCommentFail,
} from '../containers/CommentForm/actions';
import {
  fetchItem,
} from '../containers/ItemDetailPage/actions';

function* sendComment(store, { itemType, id, content }) {
  try {
    const apiToken = store.getState().auth.apiToken;
    yield call(api.post, `/api/${itemType}s/${id}/comments`, apiToken, { content });
    yield put(fetchItem(itemType, id));
  } catch (error) {
    yield put(sendCommentFail(itemType, error));
  }
}

function* watchSendComment(store) {
  yield* takeEvery(SEND_COMMENT, sendComment, store);
}

export default function* commentSagas(store) {
  yield fork(watchSendComment, store);
}

