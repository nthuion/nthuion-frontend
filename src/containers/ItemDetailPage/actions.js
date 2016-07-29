import {
  FETCH_ITEM,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAIL,
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
} from './actionTypes';

export const fetchItem = (itemType, id) => ({
  type: FETCH_ITEM,
  itemType,
  id,
});
export const fetchItemSuccess = (itemType, item) => ({
  type: FETCH_ITEM_SUCCESS,
  itemType,
  item,
});
export const fetchItemFail = (itemType, error) => ({
  type: FETCH_ITEM_FAIL,
  itemType,
  error,
});

export const fetchComments = (itemType, qid) => ({
  type: FETCH_COMMENTS,
  itemType,
  qid,
});

export const fetchCommentsSuccess = (itemType, comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  itemType,
  comments,
});

export const fetchCommentsFail = (itemType, error) => ({
  type: FETCH_COMMENTS_FAIL,
  itemType,
  error,
});

