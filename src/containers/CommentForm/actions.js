import {
  SEND_COMMENT,
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
} from './actionTypes';

export const sendComment = (qid, content) => ({
  type: SEND_COMMENT,
  qid,
  content,
});

export const fetchComments = (qid) => ({
  type: FETCH_COMMENTS,
  qid,
});

export const fetchCommentsSuccess = (qid, comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  qid,
  comments,
});

export const fetchCommentsFail = () => ({ type: FETCH_COMMENTS_FAIL });

