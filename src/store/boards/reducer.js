import {AUTHENTICATE_ACTION_TYPE, SET_TOKEN_ACTION_TYPE} from '../auth/actionTypes';
import {SET_BOARDS} from './actionTypes';
const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_BOARDS:
      debugger;
      return [...action.payload ];
    default:
      return state;
  }
}
