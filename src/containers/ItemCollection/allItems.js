import { handleActions } from 'redux-actions';
import {
  FETCH_ITEM_LIST_SUCCESS,
} from '../ItemListPage/actionTypes';

const initialState = {
  issue: [],
  solution: [],
};

const reducer = handleActions({
  [FETCH_ITEM_LIST_SUCCESS]: (state, { itemType, items }) => ({
    ...state,
    [itemType]: items.map((item) => item.id),
  }),
}, initialState);

export default reducer;

