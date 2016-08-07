import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import {
  SEND_COMMENT,
  SEND_EDIT_COMMENT,
} from '../containers/CommentForm/actionTypes';
import {
  sendCommentFail,
  sendCommentSuccess,
  sendEditCommentFail,
  sendEditCommentSuccess,
} from '../containers/CommentForm/actions';
import {
  fetchItem,
} from '../containers/ItemDetailPage/actions';

function* sendComment(store, { itemType, id, content }) {
  try {
    const apiToken = store.getState().auth.apiToken;
    yield call(api.post, `/api/${itemType}s/${id}/comments`, apiToken, { content });
    yield put(sendCommentSuccess());
    yield put(fetchItem(itemType, id));
  } catch (error) {
    yield put(sendCommentFail(itemType, error));
  }
}

function* watchSendComment(store) {
  yield* takeEvery(SEND_COMMENT, sendComment, store);
}

function* sendEditComment(store, { comment, content }) {
  try {
    const apiToken = store.getState().auth.apiToken;
    const { parent } = comment;
    yield call(api.put, `/api/comments/${comment.id}`, apiToken, { content });
    yield put(sendEditCommentSuccess());
    yield put(fetchItem(parent.type, parent.id));
  } catch (error) {
    yield put(sendEditCommentFail(error));
  }
}

function* watchSendEditComment(store) {
  yield* takeEvery(SEND_EDIT_COMMENT, sendEditComment, store);
}

export default function* commentSagas(store) {
  yield fork(watchSendComment, store);
  yield fork(watchSendEditComment, store);
}

