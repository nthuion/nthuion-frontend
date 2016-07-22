import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from '../containers/Auth/reducer';
import questionReducer from '../containers/QuestionListPage/reducer';

export default combineReducers({
  auth: authReducer,
  question: questionReducer,
  routing: routerReducer,
});

