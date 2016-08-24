import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
} from './actionTypes';

export const fetchUser = (id) => ({
  type: FETCH_USER,
  id,
});

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  user,
});

export const fetchUserFail = (error) => ({
  type: FETCH_USER_FAIL,
  error,
});

