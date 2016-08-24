import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import api from '../utils/api';
import {
  FETCH_USER,
} from '../containers/UserInfoPage/actionTypes';
import {
  fetchUserSuccess,
  fetchUserFail,
} from '../containers/UserInfoPage/actions';

function* fetchUser({ id }) {
  try {
    const user = yield call(api.get, `/api/users/${id}`);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFail(error));
    yield put(replace('/i'));
  }
}

function* watchFetchUser() {
  yield* takeEvery(FETCH_USER, fetchUser);
}

export default function* userSagas() {
  yield fork(watchFetchUser);
}

