import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import { push } from 'react-router-redux';
import {
  CREATE_ITEM,
  EDIT_ITEM,
} from '../containers/CreateItemPage/actionTypes';
import {
  createItemSuccess,
  createItemFail,
  editItemSuccess,
  editItemFail,
} from '../containers/CreateItemPage/actions';

function* createItem(store, { itemType, item }) {
  try {
    const apiToken = store.getState().auth.apiToken;
    yield call(api.post, `/api/${itemType}s`, apiToken, item);
    yield put(createItemSuccess(itemType));
    yield put(push(`/${itemType[0]}`));
  } catch (error) {
    yield put(createItemFail(itemType, error));
  }
}

function* watchCreateItem(store) {
  yield* takeEvery(CREATE_ITEM, createItem, store);
}

function* editItem(store, { itemType, id, item }) {
  try {
    const apiToken = store.getState().auth.apiToken;
    yield call(api.put, `/api/${itemType}s/${id}`, apiToken, item);
    yield put(editItemSuccess(itemType));
    yield put(push(`/${itemType[0]}`));
  } catch (error) {
    yield put(editItemFail(itemType, error));
  }
}

function* watchEditItem(store) {
  yield* takeEvery(EDIT_ITEM, editItem, store);
}

export default function* createItemSaga(store) {
  yield fork(watchCreateItem, store);
  yield fork(watchEditItem, store);
}

