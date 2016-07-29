import { handleActions } from 'redux-actions';
import {
  FETCH_ITEM_SUCCESS,
  FETCH_COMMENTS_SUCCESS,
} from './actionTypes';

const initialState = {
  item: null,
  comments: [],
};

const reducer = handleActions({
  [FETCH_ITEM_SUCCESS]: (state, { item }) => ({
    ...state,
    item,
  }),
  [FETCH_COMMENTS_SUCCESS]: (state, { comments }) => ({
    ...state,
    comments,
  }),
}, initialState);

export default reducer;

