import {
  COUNT_CHANGE_ACTION_TYPE,
  GET_BOARD_LIST_ACTION_TYPE,
 	LOADING_ACTION_TYPE,
  SET_BOARD_NAME_ACTION_TYPE,
	SHOW_MODAL_ACTION_TYPE,
	DRAG_CARD_ACTION_TYPE,
} from './actionTypes';

export const coolAction = (count) => ({
  type: COUNT_CHANGE_ACTION_TYPE,
  payload: count
});

export const showModal = (modal) => ({
  type: SHOW_MODAL_ACTION_TYPE,
  payload: modal
});

export const boardName = (name) => ({
  type: SET_BOARD_NAME_ACTION_TYPE,
  payload: name
});



export const loadList = (list) => ({
  type: GET_BOARD_LIST_ACTION_TYPE,
  payload: list
});

export const loading = (load) => ({
  type: LOADING_ACTION_TYPE,
  payload: load
});

export const dragCard = (e, id ) => (dispatch) => {
	e.dataTransfer.setData('id', id);
	dispatch({
		type: DRAG_CARD_ACTION_TYPE,
		payload: id
	})
}
