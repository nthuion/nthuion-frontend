import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import {
  FETCH_QUESTION_LIST,
} from '../containers/QuestionListPage/actionTypes';
import {
  fetchQuestionListSuccess,
  fetchQuestionListFail,
} from '../containers/QuestionListPage/actions';

function* fetchQuestionList() {
  try {
    const { data } = yield call(api.get, '/api/questions');
    yield put(fetchQuestionListSuccess(data));
  } catch (err) {
    yield put(fetchQuestionListFail());
  }
}

function* watchFetchQuestionList() {
  yield* takeEvery(FETCH_QUESTION_LIST, fetchQuestionList);
}

export default function* question() {
  yield fork(watchFetchQuestionList);
}

