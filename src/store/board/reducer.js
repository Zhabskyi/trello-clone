import {SET_BOARD, SET_BOARD_CARDS, SET_BOARD_LIST} from './actionTypes';

const INITIAL_STATE = {
  lists: [],
  details: undefined,
  cards: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_BOARD_LIST:
      return {...state, lists: action.payload};
    case SET_BOARD_CARDS:
      return {...state, cards: action.payload};
    case SET_BOARD:
      return {...state, details: action.payload};
    default:
      return state;
  }
}
