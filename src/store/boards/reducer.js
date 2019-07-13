import {SET_BOARDS} from './actionTypes';
const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_BOARDS:
      return [...action.payload ];
    default:
      return state;
  }
}
