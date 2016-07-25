import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import {
  FETCH_QUESTION,
  FETCH_COMMENTS,
} from '../containers/QuestionDetailPage/actionTypes';
import {
  fetchQuestionSuccess,
  fetchQuestionFail,
  fetchCommentsSuccess,
  fetchCommentsFail,
} from '../containers/QuestionDetailPage/actions';

function* fetchQuestion({ id }) {
  try {
    const question = yield call(api.get, `/api/questions/${id}`);
    yield put(fetchQuestionSuccess(question));
  } catch (err) {
    yield put(fetchQuestionFail());
  }
}

function* watchFetchQuestion() {
  yield* takeEvery(FETCH_QUESTION, fetchQuestion);
}

function* fetchComments({ qid }) {
  try {
    const { data } = yield call(api.get, `/api/questions/${qid}/comments`);
    yield put(fetchCommentsSuccess(data));
  } catch (err) {
    yield put(fetchCommentsFail());
  }
}

function* watchFetchComments() {
  yield* takeEvery(FETCH_COMMENTS, fetchComments);
}

export default function* questionSagas() {
  yield fork(watchFetchQuestion);
  yield fork(watchFetchComments);
}

