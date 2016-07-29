import { VOTE, VOTE_FAIL } from './actionTypes';

export const upVote = (itemType, id) => ({
  type: VOTE,
  itemType,
  id,
  value: 1,
});

export const downVote = (itemType, id) => ({
  type: VOTE,
  itemType,
  id,
  value: -1,
});

export const voteFail = (itemType, error) => ({
  type: VOTE_FAIL,
  itemType,
  error,
});

