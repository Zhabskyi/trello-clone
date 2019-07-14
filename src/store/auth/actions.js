import {AUTHENTICATE_ACTION_TYPE, SET_TOKEN_ACTION_TYPE} from './actionTypes';
import { LOCATION_CHANGE } from 'connected-react-router';
import {addNotification} from '../notifications';

const TOKEN_KEY = 'token';

export const login = (auth) => ({
  type: AUTHENTICATE_ACTION_TYPE,
  payload: auth
});

export const authError = () => (dispatch) => {
  dispatch({
    type: LOCATION_CHANGE,
    payload: {
      location: {
        pathname: '/',
      },
      action: 'POP'
    }
  })
};

export const setToken = (token) => async () => {
  localStorage.setItem(TOKEN_KEY, token);
  return {
    type: SET_TOKEN_ACTION_TYPE,
    payload: token
  };
};

export const validateToken = () => (dispatch) => {
  const token = localStorage.getItem(TOKEN_KEY);
  console.log(token);
  if (token) {
    dispatch({
      type: SET_TOKEN_ACTION_TYPE,
      payload: token
    });
  } else {
    dispatch({
      type: LOCATION_CHANGE,
      payload: {
        location: {
          pathname: '/',
        },
        action: 'PUSH'
      }
    });
    dispatch(addNotification({message: 'Token expired'}));
  }
};
