import {
  FETCH_QUESTION,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAIL,
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
} from './actionTypes';

export const fetchQuestion = (id) => ({
  type: FETCH_QUESTION,
  id,
});
export const fetchQuestionSuccess = (question) => ({
  type: FETCH_QUESTION_SUCCESS,
  question,
});
export const fetchQuestionFail = (error) => ({
  type: FETCH_QUESTION_FAIL,
  error,
});

export const fetchComments = (qid) => ({
  type: FETCH_COMMENTS,
  qid,
});

export const fetchCommentsSuccess = (comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  comments,
});

export const fetchCommentsFail = (error) => ({
  type: FETCH_COMMENTS_FAIL,
  error,
});

