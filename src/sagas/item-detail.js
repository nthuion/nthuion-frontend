import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import {
  FETCH_ITEM,
} from '../containers/ItemDetailPage/actionTypes';
import {
  fetchItemSuccess,
  fetchItemFail,
  fetchCommentsFail,
} from '../containers/ItemDetailPage/actions';

function* fetchComments({ itemType, id }) {
  try {
    const { data } = yield call(api.get, `/api/${itemType}s/${id}/comments`);
    return data;
  } catch (error) {
    yield put(fetchCommentsFail(itemType, id, error));
  }
  return [];
}

function* fetchItem({ itemType, id }) {
  try {
    const item = yield call(api.get, `/api/${itemType}s/${id}`);
    item.comments = yield call(fetchComments, { itemType, id });
    yield put(fetchItemSuccess(itemType, item));
  } catch (error) {
    yield put(fetchItemFail(itemType, error));
  }
}

function* watchFetchItem() {
  yield* takeEvery(FETCH_ITEM, fetchItem);
}

export default function* itemDetailSaga() {
  yield fork(watchFetchItem);
}

