import { COUNT_CHANGE_ACTION_TYPE } from './actions';
import { SHOW_MODAL_ACTION_TYPE } from './actions';
import { AUTHENTICATE_ACTION_TYPE } from './actions';
import { SET_TOKEN_ACTION_TYPE } from './actions';
import { SET_BOARD_NAME_ACTION_TYPE } from './actions';
import { GET_BOARD_LIST_ACTION_TYPE } from './actions';
import { LOADING_ACTION_TYPE } from './actions';

const INITIAL_STATE = {
	clickCounts: 0,
	token: '',
	isShowModal: false,
	isAuthenticated: false,
	boardName: '',
	boardList: [],
	isLoading: true
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type) {
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
    default:
      return {...state}
  }
}