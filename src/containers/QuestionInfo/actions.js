import { VOTE, VOTE_FAIL } from './actionTypes';

export const upVote = (id) => ({
  type: VOTE,
  id,
  value: 1,
});

export const downVote = (id) => ({
  type: VOTE,
  id,
  value: -1,
});

export const voteFail = () => ({ type: VOTE_FAIL });

