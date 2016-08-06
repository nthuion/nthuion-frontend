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

function* fetchItem(store, { itemType, id }) {
  try {
    const apiToken = store.getState().auth.apiToken;
    const item = yield call(api.get, `/api/${itemType}s/${id}`, apiToken);
    item.comments = yield call(fetchComments, { itemType, id });
    yield put(fetchItemSuccess(itemType, item));
  } catch (error) {
    yield put(fetchItemFail(itemType, error));
  }
}

function* watchFetchItem(store) {
  yield* takeEvery(FETCH_ITEM, fetchItem, store);
}

export default function* itemDetailSaga(store) {
  yield fork(watchFetchItem, store);
}

