import {
  FETCH_ITEM_LIST,
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_ITEM_LIST_FAIL,
} from './actionTypes';


export const fetchItemList = (itemType, params) => ({
  type: FETCH_ITEM_LIST,
  itemType,
  params,
});
export const fetchItemListSuccess = (itemType, items, params) => ({
  type: FETCH_ITEM_LIST_SUCCESS,
  itemType,
  items,
  params,
});
export const fetchItemListFail = (itemType, error) => ({
  type: FETCH_ITEM_LIST_FAIL,
  itemType,
  error,
});

