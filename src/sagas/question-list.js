import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import { push } from 'react-router-redux';
import { FETCH_QUESTION_LIST } from '../containers/QuestionListPage/actionTypes';
import { CREATE_QUESTION } from '../containers/CreateQuestionPage/actionTypes';
import { VOTE } from '../containers/QuestionInfo/actionTypes';
import {
  fetchQuestionListSuccess,
  fetchQuestionListFail,
} from '../containers/QuestionListPage/actions';
import {
  createQuestionSuccess,
  createQuestionFail,
} from '../containers/CreateQuestionPage/actions';
import { voteFail } from '../containers/QuestionInfo/actions';

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
    yield call(api.post, '/api/questions', apiToken, question);
    yield put(createQuestionSuccess());
    yield put(push('/q'));
  } catch (err) {
    yield put(createQuestionFail());
  }
}

function* watchCreateQuestion(store) {
  yield* takeEvery(CREATE_QUESTION, createQuestion, store);
}

function* vote(store, { id, value }) {
  try {
    const apiToken = store.getState().auth.apiToken;
    yield call(api.put, `/api/questions/${id}/vote`, apiToken, { value });
  } catch (err) {
    yield put(voteFail());
  }
}

function* watchVote(store) {
  yield* takeEvery(VOTE, vote, store);
}

export default function* questionSagas(store) {
  yield fork(watchFetchQuestionList);
  yield fork(watchCreateQuestion, store);
  yield fork(watchVote, store);
}

