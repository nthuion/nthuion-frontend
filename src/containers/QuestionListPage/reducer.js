import { handleActions } from 'redux-actions';

const initialState = {
  questions: [],
};

const reducer = handleActions({
  FETCH_QUESTIONS_SUCCESS: (state, { questions }) => ({
    ...state,
    questions,
  }),
}, initialState);

export default reducer;

