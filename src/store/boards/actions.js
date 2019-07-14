import axios from '../../axios-instance';
import {SET_BOARDS} from './actionTypes';
import {authError} from '../auth';

export const fetchBoards = () => async (dispatch) => {
  try {
    // const state = getState();
    const response = await axios.get(`/1/members/me/boards?key=${process.env.REACT_APP_TRELLO_KEY}&token=${localStorage.token}`);
    dispatch({
      type: SET_BOARDS,
      payload:response.data
    });
  } catch (e) {
    debugger;
    if (e.response && e.response.status === 401) {
      dispatch(authError())
    } else {
      alert(e.response.message)
    }
  }
};
