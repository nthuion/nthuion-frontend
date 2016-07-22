import { handleActions } from 'redux-actions';

const initialState = {
  token: null,
};

const reducer = handleActions({
  FB_LOGIN_SUCCESS: (state, { token }) => ({
    ...state,
    token,
  }),
}, initialState);

export default reducer;

