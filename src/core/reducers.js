import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from '../containers/Auth/reducer';
import itemCollectionReducer from '../containers/ItemCollection/reducer';

export default combineReducers({
  auth: authReducer,
  itemCollection: itemCollectionReducer,
  routing: routerReducer,
});

