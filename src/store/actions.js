import axios from '../axios-instance';
import {
  AUTHENTICATE_ACTION_TYPE,
  COUNT_CHANGE_ACTION_TYPE,
  GET_BOARD_LIST_ACTION_TYPE,
  GET_LISTS_ACTION_TYPE, LOADING_ACTION_TYPE,
  SET_BOARD,
  SET_BOARD_NAME_ACTION_TYPE,
  SET_BOARDS,
  SET_TOKEN_ACTION_TYPE,
  SHOW_MODAL_ACTION_TYPE
} from './actionTypes';


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

export const fetchBoard = (id) => async (dispatch) => {
  try {
    try {
      const response = await axios.get(`/1/boards/${id}/lists?key=${process.env.REACT_APP_TRELLO_KEY}&token=${localStorage.token}`);
      dispatch({
        type: SET_BOARD,
        payload:response.data
      });
    } catch (e) {
      console.log(e);
    }
  } catch(e) {

  }
};

export const loadList = (list) => ({
  type: GET_BOARD_LIST_ACTION_TYPE,
  payload: list
});

export const loading = (load) => ({
  type: LOADING_ACTION_TYPE,
  payload: load
});

export const fetchBoards = () => async (dispatch) => {
  try {
   // const state = getState();
    const response = await axios.get(`/1/members/me/boards?key=${process.env.REACT_APP_TRELLO_KEY}&token=${localStorage.token}`);
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
    const response = await axios.get(`/1/boards/${id}/lists?key=${process.env.REACT_APP_TRELLO_KEY}&token=${localStorage.token}`);
    dispatch({
      type: GET_LISTS_ACTION_TYPE,
      payload:response.data
    });
  } catch (e) {
    console.log(e);
  }
};


