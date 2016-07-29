import {
  CREATE_ITEM,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_FAIL,
} from './actionTypes';

export const createItem = (itemType, item) => ({
  type: CREATE_ITEM,
  itemType,
  item,
});
export const createItemSuccess = (itemType) => ({
  type: CREATE_ITEM_SUCCESS,
  itemType,
});
export const createItemFail = (itemType, error) => ({
  type: CREATE_ITEM_FAIL,
  itemType,
  error,
});

