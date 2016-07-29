import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import {
  FETCH_ITEM,
  FETCH_COMMENTS,
} from '../containers/ItemDetailPage/actionTypes';
import {
  fetchItemSuccess,
  fetchItemFail,
  fetchCommentsSuccess,
  fetchCommentsFail,
} from '../containers/ItemDetailPage/actions';

function* fetchItem({ itemType, id }) {
  try {
    const item = yield call(api.get, `/api/${itemType}s/${id}`);
    yield put(fetchItemSuccess(itemType, item));
  } catch (error) {
    yield put(fetchItemFail(itemType, error));
  }
}

function* watchFetchItem() {
  yield* takeEvery(FETCH_ITEM, fetchItem);
}

function* fetchComments({ itemType, qid }) {
  try {
    const { data } = yield call(api.get, `/api/${itemType}s/${qid}/comments`);
    yield put(fetchCommentsSuccess(itemType, data));
  } catch (error) {
    yield put(fetchCommentsFail(itemType, error));
  }
}

function* watchFetchComments() {
  yield* takeEvery(FETCH_COMMENTS, fetchComments);
}

export default function* itemDetailSaga() {
  yield fork(watchFetchItem);
  yield fork(watchFetchComments);
}

