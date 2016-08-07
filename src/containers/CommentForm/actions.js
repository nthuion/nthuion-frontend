import {
  EDIT_COMMENT,
  SEND_COMMENT,
  SEND_COMMENT_SUCCESS,
  SEND_COMMENT_FAIL,
} from './actionTypes';

export const editComment = (editorState) => ({
  type: EDIT_COMMENT,
  editorState,
});

export const sendComment = (itemType, id, content) => ({
  type: SEND_COMMENT,
  itemType,
  id,
  content,
});

export const sendCommentSuccess = () => ({ type: SEND_COMMENT_SUCCESS });

export const sendCommentFail = (itemType, error) => ({
  type: SEND_COMMENT_FAIL,
  itemType,
  error,
});

