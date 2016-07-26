import {
  SEND_COMMENT,
  SEND_COMMENT_FAIL,
} from './actionTypes';

export const sendComment = (qid, content) => ({
  type: SEND_COMMENT,
  qid,
  content,
});

export const sendCommentFail = (error) => ({
  type: SEND_COMMENT_FAIL,
  error,
});

