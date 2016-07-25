import {
  SEND_COMMENT,
} from './actionTypes';

export const sendComment = (qid, content) => ({
  type: SEND_COMMENT,
  qid,
  content,
});

