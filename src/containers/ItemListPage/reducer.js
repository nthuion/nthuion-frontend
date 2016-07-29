import { handleActions } from 'redux-actions';
import {
  FETCH_ITEM_LIST_SUCCESS,
} from './actionTypes';

const initialState = {
  items: {
    issue: [],
    solution: [],
  },
};

const reducer = handleActions({
  [FETCH_ITEM_LIST_SUCCESS]: (state, { itemType, items }) => ({
    items: {
      ...state.items,
      [itemType]: items,
    },
  }),
}, initialState);

export default reducer;

