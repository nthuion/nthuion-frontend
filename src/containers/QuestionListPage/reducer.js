import { handleActions } from 'redux-actions';
import {
  FETCH_QUESTION_LIST_SUCCESS,
} from './actionTypes';

const initialState = {
  questions: [],
};

const reducer = handleActions({
  [FETCH_QUESTION_LIST_SUCCESS]: (state, { questions }) => ({
    ...state,
    questions,
  }),
}, initialState);

export default reducer;

