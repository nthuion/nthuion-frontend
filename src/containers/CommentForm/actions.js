import {
  SEND_COMMENT,
  SEND_COMMENT_FAIL,
} from './actionTypes';

export const sendComment = (itemType, qid, content) => ({
  type: SEND_COMMENT,
  itemType,
  qid,
  content,
});

export const sendCommentFail = (itemType, error) => ({
  type: SEND_COMMENT_FAIL,
  itemType,
  error,
});

