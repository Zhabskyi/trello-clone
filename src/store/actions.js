import axios from '../axios-instance';

export const SET_TOKEN_ACTION_TYPE = '@@AUTH/SET_TOKEN';
export const COUNT_CHANGE_ACTION_TYPE = '@@TRASH/COUNT_CHANGED';
export const SHOW_MODAL_ACTION_TYPE = '@@BOARD/SHOW_MODAL';
export const SET_BOARDS = '@@BOARD/SET_BOARDS';
export const AUTHENTICATE_ACTION_TYPE = '@@AUTH/AUTHENTICATE';
export const SET_BOARD_NAME_ACTION_TYPE = '@@BOARD/SET_NAME';
export const GET_BOARD_LIST_ACTION_TYPE = '@@BOARD/GET_BOARD_LIST';
export const GET_LISTS_ACTION_TYPE = '@@LISTS/GET_LISTS';
export const LOADING_ACTION_TYPE = '@@BOARD/LOADING';

export const setToken = (token) => ({
  type: SET_TOKEN_ACTION_TYPE,
  payload: token
});

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
});

export const loadList = (list) => ({
  type: GET_BOARD_LIST_ACTION_TYPE,
  payload: list
});

export const loading = (load) => ({
  type: LOADING_ACTION_TYPE,
  payload: load
});

export const fetchBoards = () => async (dispatch, getState) => {
  try {
   // const state = getState();
    const response = await axios.get(`/1/members/me/boards?key=34630d57dfd6a65943e65203196c0e97&token=${localStorage.token}`);
    dispatch({
      type: SET_BOARDS,
      payload:response.data
    });
  } catch (e) {
    console.log(e);
  }
};

export const fetchLists = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/1/boards/${id}/lists?key=34630d57dfd6a65943e65203196c0e97&token=${localStorage.token}`);
    dispatch({
      type: GET_LISTS_ACTION_TYPE,
      payload:response.data
    });
  } catch (e) {
    console.log(e);
  }
};


