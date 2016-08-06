import { combineReducers } from 'redux';
import itemsById from './itemsById';
import allItems from './allItems';

const reducer = combineReducers({
  itemsById,
  allItems,
});

export default reducer;

