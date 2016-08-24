import { handleActions } from 'redux-actions';
import {
  FETCH_ME_SUCCESS,
} from '../Auth/actionTypes';
import {
  FETCH_USER_SUCCESS,
} from './actionTypes';

const initialState = {};

const reducer = handleActions({
  [FETCH_ME_SUCCESS]: (state, { me }) => ({
    ...state,
    [me.id]: me,
  }),
  [FETCH_USER_SUCCESS]: (state, { user }) => ({
    ...state,
    [user.id]: user,
  }),
}, initialState);

export default reducer;

