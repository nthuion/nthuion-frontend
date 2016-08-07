import {
  EDIT_COMMENT,
  SEND_COMMENT,
  SEND_COMMENT_SUCCESS,
  SEND_COMMENT_FAIL,
  SEND_EDIT_COMMENT,
  SEND_EDIT_COMMENT_SUCCESS,
  SEND_EDIT_COMMENT_FAIL,
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

export const sendEditComment = (comment, content) => ({
  type: SEND_EDIT_COMMENT,
  comment,
  content,
});

export const sendEditCommentSuccess = () => ({ type: SEND_EDIT_COMMENT_SUCCESS });

export const sendEditCommentFail = (error) => ({
  type: SEND_EDIT_COMMENT_FAIL,
  error,
});

