import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import { FETCH_ITEM_LIST } from '../containers/ItemListPage/actionTypes';
import { VOTE } from '../containers/ItemInfo/actionTypes';
import {
  fetchItemListSuccess,
  fetchItemListFail,
} from '../containers/ItemListPage/actions';
import {
  fetchItem,
} from '../containers/ItemDetailPage/actions';
import { voteFail } from '../containers/ItemInfo/actions';

function* fetchItemList(store, { itemType, params }) {
  try {
    const apiToken = store.getState().auth.apiToken;
    const { data } = yield call(api.get, `/api/${itemType}s`, apiToken, params);
    yield put(fetchItemListSuccess(itemType, data, params));
  } catch (error) {
    yield put(fetchItemListFail(itemType, error));
  }
}

function* watchFetchItemList(store) {
  yield* takeEvery(FETCH_ITEM_LIST, fetchItemList, store);
}

function* vote(store, { itemType, id, value }) {
  try {
    const apiToken = store.getState().auth.apiToken;
    yield call(api.put, `/api/${itemType}s/${id}/vote`, apiToken, { value });
    yield put(fetchItem(itemType, id));
  } catch (error) {
    yield put(voteFail(itemType, error));
  }
}

function* watchVote(store) {
  yield* takeEvery(VOTE, vote, store);
}

export default function* itemListSaga(store) {
  yield fork(watchFetchItemList, store);
  yield fork(watchVote, store);
}

