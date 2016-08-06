import { handleActions } from 'redux-actions';
import {
  FETCH_ITEM_LIST_SUCCESS,
} from '../ItemListPage/actionTypes';
import {
  FETCH_ITEM_SUCCESS,
  FETCH_COMMENTS_SUCCESS,
} from '../ItemDetailPage/actionTypes';

const initialState = {
  issue: {},
  solution: {},
};

const reducer = handleActions({
  [FETCH_ITEM_LIST_SUCCESS]: (state, { itemType, items }) => {
    const byId = items.reduce((reduction, item) => ({
      ...reduction,
      [item.id]: {
        ...state[itemType][item.id],
        ...item,
      },
    }), state[itemType]);
    return {
      ...state,
      [itemType]: byId,
    };
  },
  [FETCH_ITEM_SUCCESS]: (state, { itemType, item }) => {
    const byId = {
      ...state[itemType],
      [item.id]: {
        ...state[itemType][item.id],
        ...item,
      },
    };
    return {
      ...state,
      [itemType]: byId,
    };
  },
  [FETCH_COMMENTS_SUCCESS]: (state, { itemType, id, comments }) => {
    const byId = {
      ...state[itemType],
      [id]: {
        ...state[itemType][id],
        comments,
      },
    };
    return {
      ...state,
      [itemType]: byId,
    };
  },
}, initialState);

export default reducer;

