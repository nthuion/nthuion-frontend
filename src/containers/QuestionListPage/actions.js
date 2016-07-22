import {
  FETCH_QUESTION_LIST,
  FETCH_QUESTION_LIST_SUCCESS,
  FETCH_QUESTION_LIST_FAIL,
} from './actionTypes';


export const fetchQuestionList = () => ({ type: FETCH_QUESTION_LIST });
export const fetchQuestionListSuccess = (questions) => ({
  type: FETCH_QUESTION_LIST_SUCCESS,
  questions,
});
export const fetchQuestionListFail = () => ({ type: FETCH_QUESTION_LIST_FAIL });

