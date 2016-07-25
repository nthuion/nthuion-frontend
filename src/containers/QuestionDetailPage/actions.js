import {
  FETCH_QUESTION,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAIL,
} from './actionTypes';

export const fetchQuestion = () => ({ type: FETCH_QUESTION });
export const fetchQuestionSuccess = (question) => ({
  type: FETCH_QUESTION_SUCCESS,
  question,
});
export const fetchQuestionFail = () => ({ type: FETCH_QUESTION_FAIL });

