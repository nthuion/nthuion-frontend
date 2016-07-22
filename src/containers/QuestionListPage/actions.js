import { createAction } from 'redux-actions';

export const fetchQuestions = createAction('FETCH_QUESTIONS');
export const fetchQuestionsSuccess = (questions) => ({
  type: 'FETCH_QUESTIONS_SUCCESS',
  questions,
});
export const fetchQuestionsFail = createAction('FETCH_QUESTIONS_SUCCESS');

