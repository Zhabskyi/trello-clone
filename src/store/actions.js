export const SET_TOKEN_ACTION_TYPE = '@@AUTH/SET_TOKEN';
export const COUNT_CHANGE_ACTION_TYPE = '@@TRASH/COUNT_CHANGED';
export const SHOW_MODAL_ACTION_TYPE = '@@BOARD/SHOW_MODAL';
export const AUTHENTICATE_ACTION_TYPE = '@@AUTH/AUTHENTICATE';
export const SET_BOARD_NAME_ACTION_TYPE = '@@BOARD/SET_NAME';
export const GET_BOARD_LIST_ACTION_TYPE = '@@BOARD/GET_BOARD_LIST';
export const LOADING_ACTION_TYPE = '@@BOARD/LOADING';

export const setToken = (token) => ({
  type: SET_TOKEN_ACTION_TYPE,
  payload: token
}) ;

export const coolAction = (count) => ({
  type: COUNT_CHANGE_ACTION_TYPE,
  payload: count
});

export const showModal = (modal) => ({
	type: SHOW_MODAL_ACTION_TYPE,
	payload: modal
});

export const login = (auth) => ({
	type: AUTHENTICATE_ACTION_TYPE,
	payload: auth
});

export const boardName = (name) => ({
	type: SET_BOARD_NAME_ACTION_TYPE,
	payload: name
})

export const loadList = (list) => ({
	type: GET_BOARD_LIST_ACTION_TYPE,
	payload: list
})

export const loading = (load) => ({
	type: LOADING_ACTION_TYPE,
	payload: load
})


