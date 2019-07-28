import {
	SET_BOARDS,
	SET_BOARD,
	SET_BOARD_CARDS,
	SET_BOARD_LIST,
	DROP_CARD_ACTION_TYPE
} from './actionTypes';

const INITIAL_STATE = {
	boards: [],
	lists: [],
  details: undefined,
	cards: [],
	isLoadingBoard: true,
};

export default function (state = INITIAL_STATE, action) {
	debugger;
  switch (action.type) {
		case SET_BOARDS:
      return {...state, boards: action.payload, isLoadingBoard: true};
    case SET_BOARD_LIST:
      return {...state,  lists: action.payload};
    case SET_BOARD_CARDS:
      return {...state, cards: action.payload};
    case SET_BOARD:
			return {...state, details: action.payload, isLoadingBoard:false};
		case DROP_CARD_ACTION_TYPE:
					return {...state, lists: action.payload };
    default:
      return state;
  }
}
