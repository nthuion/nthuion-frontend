import { handleActions } from 'redux-actions';
import {
  FETCH_QUESTION_SUCCESS,
  FETCH_COMMENTS_SUCCESS,
} from './actionTypes';

const initialState = {
  question: null,
  comments: [],
};

const reducer = handleActions({
  [FETCH_QUESTION_SUCCESS]: (state, { question }) => ({
    ...state,
    question,
  }),
  [FETCH_COMMENTS_SUCCESS]: (state, { comments }) => ({
    ...state,
    comments,
  }),
}, initialState);

export default reducer;

