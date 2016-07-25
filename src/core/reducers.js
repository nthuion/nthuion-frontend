import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from '../containers/Auth/reducer';
import questionListReducer from '../containers/QuestionListPage/reducer';
import questionDetailReducer from '../containers/QuestionDetailPage/reducer';

export default combineReducers({
  auth: authReducer,
  questionList: questionListReducer,
  questionDetail: questionDetailReducer,
  routing: routerReducer,
});

