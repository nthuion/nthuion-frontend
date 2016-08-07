import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from '../containers/Auth/reducer';
import createItemReducer from '../containers/CreateItemPage/reducer';
import commentFormReducer from '../containers/CommentForm/reducer';
import itemCollectionReducer from '../containers/ItemCollection/reducer';

export default combineReducers({
  auth: authReducer,
  itemCollection: itemCollectionReducer,
  createItem: createItemReducer,
  commentForm: commentFormReducer,
  routing: routerReducer,
});

