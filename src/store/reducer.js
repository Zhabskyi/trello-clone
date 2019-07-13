import {
	DRAG_CARD_ACTION_TYPE,
	DROP_CARD_ACTION_TYPE,
	GET_LIST_ID_ACTION_TYPE
} from './actionTypes';

const INITIAL_STATE = {
  clickCounts: 0,
  isShowModal: false,
  boardName: '',
	isLoading: true,
	isLoadingBoard: true,
	isLoadingCards: true,
	isDragging: true,
	draggingCard: '',
	onDragListId: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
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
