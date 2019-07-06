import {AUTHENTICATE_ACTION_TYPE, SET_TOKEN_ACTION_TYPE} from './actionTypes';

export const login = (auth) => ({
  type: AUTHENTICATE_ACTION_TYPE,
  payload: auth
});

export const setToken = (token) => ({
  type: SET_TOKEN_ACTION_TYPE,
  payload: token
});
