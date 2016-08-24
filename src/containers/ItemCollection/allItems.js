import { handleActions } from 'redux-actions';
import {
  FETCH_ITEM_LIST,
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_ITEM_LIST_FAIL,
} from '../ItemListPage/actionTypes';

const initialState = {
  fetching: false,
  issue: {
    latest: [],
    popularity: [],
  },
  solution: {
    latest: [],
    popularity: [],
  },
};

const reducer = handleActions({
  [FETCH_ITEM_LIST]: (state) => ({
    ...state,
    fetching: true,
  }),
  [FETCH_ITEM_LIST_SUCCESS]: (state, { itemType, items, params }) => {
    const { ordering } = params;
    return {
      ...state,
      fetching: false,
      [itemType]: {
        ...state[itemType],
        [ordering]: [...state[itemType][ordering], ...items.map((item) => item.id)],
      },
    };
  },
  [FETCH_ITEM_LIST_FAIL]: (state) => ({
    ...state,
    fetching: false,
  }),
}, initialState);

export default reducer;

