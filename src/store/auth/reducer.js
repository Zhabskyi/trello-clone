import {AUTHENTICATE_ACTION_TYPE, SET_TOKEN_ACTION_TYPE} from './actionTypes';

const INITIAL_STATE = {
  isAuthenticated: false,
  token: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TOKEN_ACTION_TYPE:
      return {...state, token: action.payload};
    case AUTHENTICATE_ACTION_TYPE:
      return {...state, isAuthenticated: !state.isAuthenticated};
    default:
      return {...state};
  }
}
