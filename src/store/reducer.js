import {
  LOADING_ACTION_TYPE,
  COUNT_CHANGE_ACTION_TYPE,
  SHOW_MODAL_ACTION_TYPE,
  GET_BOARD_LIST_ACTION_TYPE,
  SET_BOARD_NAME_ACTION_TYPE,
  SET_TOKEN_ACTION_TYPE,
  AUTHENTICATE_ACTION_TYPE,
	SET_BOARDS, 
	SET_BOARD_LIST,
	SET_BOARD_CARDS,
	SET_BOARD,
	DRAG_CARD_ACTION_TYPE,
	DROP_CARD_ACTION_TYPE,
	GET_LIST_ID_ACTION_TYPE
} from './actionTypes';

const INITIAL_STATE = {
  clickCounts: 0,
  token: '',
  isShowModal: false,
  isAuthenticated: false,
  boardName: '',
  boardList: [],
	isLoading: true,
	isLoadingBoard: true,
	isLoadingCards: true,
	isDragging: true,
	lists: [],
	board: {},
	cards: [],
	draggingCard: '',
	onDragListId: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case COUNT_CHANGE_ACTION_TYPE:
      return {...state, clickCounts: state.clickCounts + 1};
    case SET_TOKEN_ACTION_TYPE:
      return {...state, token: action.payload};
    case SHOW_MODAL_ACTION_TYPE:
      return {...state, isShowModal: !state.isShowModal};
    case AUTHENTICATE_ACTION_TYPE:
      return {...state, isAuthenticated: !state.isAuthenticated};
    case SET_BOARD_NAME_ACTION_TYPE:
      return {...state, boardName: action.payload};
    case GET_BOARD_LIST_ACTION_TYPE:
      return {...state, boardList: action.payload};
    case LOADING_ACTION_TYPE:
      return {...state, isLoading: !state.isLoading};
    case SET_BOARDS:
      return {...state, boardList: action.payload, isLoading: false};
    case SET_BOARD_LIST:
			return {...state, lists: action.payload, isLoading: false};
		case SET_BOARD_CARDS:
			return {...state, cards: action.payload, isLoadingCards: false};
		case SET_BOARD:
			return {...state, board: action.payload, isLoadingBoard: false};
		case DRAG_CARD_ACTION_TYPE:
			return {...state, isDragging: true, };
		case DROP_CARD_ACTION_TYPE:
			return {...state, isDragging: false, cards: action.payload};
		case GET_LIST_ID_ACTION_TYPE:
			return {...state, onDragListId: action.payload};
    default:
      return {...state};
  }
}