import {
  FETCH_ITEM_LIST,
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_ITEM_LIST_FAIL,
} from './actionTypes';


export const fetchItemList = (itemType) => ({
  type: FETCH_ITEM_LIST,
  itemType,
});
export const fetchItemListSuccess = (itemType, items) => ({
  type: FETCH_ITEM_LIST_SUCCESS,
  itemType,
  items,
});
export const fetchItemListFail = (itemType, error) => ({
  type: FETCH_ITEM_LIST_FAIL,
  itemType,
  error,
});

