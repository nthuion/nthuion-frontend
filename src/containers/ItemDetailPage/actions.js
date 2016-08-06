import {
  FETCH_ITEM,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAIL,
  FETCH_COMMENTS_FAIL,
  FETCH_VOTE,
  FETCH_VOTE_SUCCESS,
  FETCH_VOTE_FAIL,
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

export const fetchCommentsFail = (itemType, id, error) => ({
  type: FETCH_COMMENTS_FAIL,
  itemType,
  id,
  error,
});

export const fetchVote = (itemType, id) => ({
  type: FETCH_VOTE,
  itemType,
  id,
});

export const fetchVoteSuccess = (itemType, userVote) => ({
  type: FETCH_VOTE_SUCCESS,
  itemType,
  userVote,
});

export const fetchVoteFail = (itemType, error) => ({
  type: FETCH_VOTE_FAIL,
  itemType,
  error,
});

