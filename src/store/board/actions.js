import axios from '../../axios-instance';
import {SET_BOARD, SET_BOARD_CARDS, SET_BOARD_LIST} from './actionTypes';

export const fetchBoard = (id) => async (dispatch) => {
  debugger;
  try {
    try {
      const lists = await axios.get(`/1/boards/${id}/lists?key=${process.env.REACT_APP_TRELLO_KEY}&token=${localStorage.token}`);
      const cards = await axios.get(`/1/boards/${id}/cards?key=${process.env.REACT_APP_TRELLO_KEY}&token=${localStorage.token}`);
      const board = await axios.get(`/1/boards/${id}?key=${process.env.REACT_APP_TRELLO_KEY}&token=${localStorage.token}`);
      dispatch({
        type: SET_BOARD_CARDS,
        payload: cards.data
      });
      dispatch({
        type: SET_BOARD_LIST,
        payload: lists.data
      });
      dispatch({
        type: SET_BOARD,
        payload: board.data
      });
    } catch (e) {
      console.log(e);
    }
  } catch (e) {

  }
};
