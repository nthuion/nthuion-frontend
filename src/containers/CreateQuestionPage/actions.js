import {
  CREATE_QUESTION,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAIL,
} from './actionTypes';

export const createQuestion = (question) => ({
  type: CREATE_QUESTION,
  question,
});
export const createQuestionSuccess = () => ({ type: CREATE_QUESTION_SUCCESS });
export const createQuestionFail = (error) => ({
  type: CREATE_QUESTION_FAIL,
  error,
});

