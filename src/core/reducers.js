import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from '../containers/Auth/reducer';
import itemListReducer from '../containers/ItemListPage/reducer';
import itemDetailReducer from '../containers/ItemDetailPage/reducer';

export default combineReducers({
  auth: authReducer,
  itemList: itemListReducer,
  itemDetail: itemDetailReducer,
  routing: routerReducer,
});

