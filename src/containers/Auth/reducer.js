import { handleActions } from 'redux-actions';

const initialState = {
  fbToken: null,
  apiToken: null,
  error: null,
};

const reducer = handleActions({
  FB_LOGIN_SUCCESS: (state, { fbToken }) => ({
    ...state,
    fbToken,
  }),
  FB_LOGIN_FAIL: (state, { type }) => ({
    ...state,
    error: type,
  }),
  API_LOGIN_SUCCESS: (state, { apiToken }) => ({
    ...state,
    apiToken,
  }),
  API_LOGIN_FAIL: (state, { type }) => ({
    ...state,
    error: type,
  }),
}, initialState);

export default reducer;

