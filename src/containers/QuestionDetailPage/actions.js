import {
  FETCH_QUESTION,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAIL,
} from './actionTypes';

export const fetchQuestion = (id) => ({
  type: FETCH_QUESTION,
  id,
});
export const fetchQuestionSuccess = (question) => ({
  type: FETCH_QUESTION_SUCCESS,
  question,
});
export const fetchQuestionFail = () => ({ type: FETCH_QUESTION_FAIL });

