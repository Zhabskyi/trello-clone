import axios from '../axios-instance';
import {
  AUTHENTICATE_ACTION_TYPE,
  COUNT_CHANGE_ACTION_TYPE,
  GET_BOARD_LIST_ACTION_TYPE,
 	LOADING_ACTION_TYPE,
	SET_BOARD_LIST,
	SET_BOARD_CARDS,
	SET_BOARD,
  SET_BOARD_NAME_ACTION_TYPE,
  SET_BOARDS,
  SET_TOKEN_ACTION_TYPE,
	SHOW_MODAL_ACTION_TYPE,
	DRAG_CARD_ACTION_TYPE,
	DROP_CARD_ACTION_TYPE,
	GET_LIST_ID_ACTION_TYPE,
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

export const dropCard = (e) => async (dispatch, getState) => {
	e.preventDefault();
	try {
		const data = e.dataTransfer.getData('id');
		const state = getState();
		let Cards = state.cards;
		for (let i = 0; i < Cards.length.length; i++) {
			if (Cards[i].id === data) {
				Cards[i].idList = state.onDragListId
			}
		}
		dispatch({
			type: DROP_CARD_ACTION_TYPE,
			payload:Cards
		});
//		const response = await axios.put(`/1/cards/${data}?idList=${state.onDragListId}&key=${process.env.REACT_APP_TRELLO_KEY}&token=${process.env.REACT_APP_TRELLO_TOKEN}`);
	// 	for (let i = 0; i < Cards.length; i++) {
	// 		if ( Cards[i].id ===  response.data.id) {
	// 			Cards.splice( i, 1 , response.data);
	// 	}
	// }

  } catch (e) {
    console.log(e);
	}
}

export const getListId = (e) => (dispatch) => {
	e.preventDefault();
	dispatch({
  type: GET_LIST_ID_ACTION_TYPE,
  payload: e.currentTarget.firstChild.id
	});
}
