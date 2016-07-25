import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import { push } from 'react-router-redux';
import {
  FETCH_QUESTION_LIST,
} from '../containers/QuestionListPage/actionTypes';
import {
  fetchQuestionListSuccess,
  fetchQuestionListFail,
} from '../containers/QuestionListPage/actions';
import {
  CREATE_QUESTION,
} from '../containers/CreateQuestionPage/actionTypes';
import {
  createQuestionSuccess,
  createQuestionFail,
} from '../containers/CreateQuestionPage/actions';

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

function* createQuestion(store, { question }) {
  try {
    const apiToken = store.getState().auth.apiToken;
    yield call(api.post, '/api/questions', question, apiToken);
    yield put(createQuestionSuccess());
    yield put(push('/q'));
  } catch (err) {
    yield put(createQuestionFail());
  }
}

function* watchCreateQuestion(store) {
  yield* takeEvery(CREATE_QUESTION, createQuestion, store);
}

export default function* questionSagas(store) {
  yield fork(watchFetchQuestionList);
  yield fork(watchCreateQuestion, store);
}

