import { handleActions } from 'redux-actions';
import {
  FETCH_COMMENTS_SUCCESS,
} from './actionTypes';

const initialState = {};

const reducer = handleActions({
  [FETCH_COMMENTS_SUCCESS]: (state, { qid, comments }) => ({
    ...state,
    [qid]: comments,
  }),
}, initialState);

export default reducer;

