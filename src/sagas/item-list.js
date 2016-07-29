import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import { FETCH_ITEM_LIST } from '../containers/ItemListPage/actionTypes';
import { VOTE } from '../containers/ItemInfo/actionTypes';
import {
  fetchItemListSuccess,
  fetchItemListFail,
} from '../containers/ItemListPage/actions';
import { voteFail } from '../containers/ItemInfo/actions';

function* fetchItemList({ itemType }) {
  try {
    const { data } = yield call(api.get, `/api/${itemType}s`);
    yield put(fetchItemListSuccess(itemType, data));
  } catch (error) {
    yield put(fetchItemListFail(itemType, error));
  }
}

function* watchFetchItemList() {
  yield* takeEvery(FETCH_ITEM_LIST, fetchItemList);
}

function* vote(store, { itemType, id, value }) {
  try {
    const apiToken = store.getState().auth.apiToken;
    yield call(api.put, `/api/${itemType}s/${id}/vote`, apiToken, { value });
  } catch (error) {
    yield put(voteFail(itemType, error));
  }
}

function* watchVote(store) {
  yield* takeEvery(VOTE, vote, store);
}

export default function* itemListSaga(store) {
  yield fork(watchFetchItemList);
  yield fork(watchVote, store);
}

