import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from '../containers/Auth/reducer';

export default combineReducers({
  auth: authReducer,
  routing: routerReducer,
});

