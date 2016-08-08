import { handleActions } from 'redux-actions';
import {
  FB_LOGIN_SUCCESS,
  FB_LOGIN_FAIL,
  API_LOGIN_SUCCESS,
  API_LOGIN_FAIL,
  FETCH_ME_SUCCESS,
  FETCH_ME_FAIL,
} from './actionTypes';

const initialState = {
  fbToken: null,
  apiToken: null,
  error: null,
  me: null,
};

const reducer = handleActions({
  [FB_LOGIN_SUCCESS]: (state, { fbToken }) => ({
    ...state,
    fbToken,
  }),
  [FB_LOGIN_FAIL]: (state, { type }) => ({
    ...state,
    error: type,
  }),
  [API_LOGIN_SUCCESS]: (state, { apiToken }) => ({
    ...state,
    apiToken,
  }),
  [API_LOGIN_FAIL]: (state, { type }) => ({
    ...state,
    error: type,
  }),
  [FETCH_ME_SUCCESS]: (state, { me }) => ({
    ...state,
    me,
  }),
  [FETCH_ME_FAIL]: () => initialState,
}, initialState);

export default reducer;

