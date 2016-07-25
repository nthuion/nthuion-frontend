import { handleActions } from 'redux-actions';
import {
  FETCH_QUESTION_SUCCESS,
} from './actionTypes';

const initialState = {
  question: null,
};

const reducer = handleActions({
  [FETCH_QUESTION_SUCCESS]: (state, { question }) => ({
    ...state,
    question,
  }),
}, initialState);

export default reducer;

