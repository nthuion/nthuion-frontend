import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import api from '../utils/api';
import {
  fetchQuestionsSuccess,
  fetchQuestionsFail,
} from '../containers/QuestionListPage/actions';

function* fetchQuestions() {
  try {
    const { data } = yield call(api.get, '/api/questions');
    yield put(fetchQuestionsSuccess(data));
  } catch (err) {
    yield put(fetchQuestionsFail());
  }
}

function* watchFetchQuestions() {
  yield* takeEvery('FETCH_QUESTIONS', fetchQuestions);
}

export default function* question() {
  yield fork(watchFetchQuestions);
}

