import axios from '../../axios-instance';
import {
	SET_BOARDS,
  SET_BOARD,
  SET_BOARD_CARDS,
  SET_BOARD_LIST,
	DROP_CARD_ACTION_TYPE
} from './actionTypes';
import {authError} from '../auth';
import {getToken} from '../auth';

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


export const fetchBoard = (id) => async (dispatch, getState) => {
  try {
    let lists = await axios.get(`/1/boards/${id}/lists?key=${process.env.REACT_APP_TRELLO_KEY}&token=${localStorage.token}`);
    const cards = await axios.get(`/1/boards/${id}/cards?key=${process.env.REACT_APP_TRELLO_KEY}&token=${localStorage.token}`);
    const board = await axios.get(`/1/boards/${id}?key=${process.env.REACT_APP_TRELLO_KEY}&token=${localStorage.token}`);

    let TrelloList = lists.data;

    TrelloList.forEach(el => {
      Object.assign(el, {cardIds: []});
    });


    const cardsData = cards.data;

    const arrayOfListsId = [];
    const arrayOfCardsId = [];

    TrelloList.forEach(el => {
      arrayOfListsId.push(el.id);
    });

    cardsData.forEach(el => {
      arrayOfCardsId.push(el.id);
    });

    const arrayToObject = (array) =>
      array.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
      }, {});

    const ObjCards = arrayToObject(cardsData);

    TrelloList.forEach(el => {
      for (let i = 0; i < cardsData.length; i++) {
        if (cardsData[i].idList === el.id) {
          el.cardIds.push(cardsData[i].id);
        }
      }
    });

    let ObjLists = arrayToObject(TrelloList);
    Object.assign(ObjLists, {listsOder: arrayOfListsId});


    dispatch({
      type: SET_BOARD_CARDS,
      payload: ObjCards
    });
    dispatch({
      type: SET_BOARD_LIST,
      payload: ObjLists
    });
    dispatch({
      type: SET_BOARD,
      payload: board.data
    });
  } catch (e) {

  }
};

export const onDragEnd = (result) => async (dispatch, getState) => {
  try {
    const state = getState();
    sessionStorage.setItem('oldList', JSON.stringify(state.data.lists));
    const {destination, source, draggableId} = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.data.lists[source.droppableId];
    const finish = state.data.lists[destination.droppableId];

    let newState = {};
    let finishIdList;

    if (start === finish) {
      const newCardsId = Array.from(start.cardIds);

      newCardsId.splice(source.index, 1);
      newCardsId.splice(destination.index, 0, draggableId);

      const newList = {
        ...start,
        cardIds: newCardsId
			};
			finishIdList = newList.id;

      newState = {
        ...state.data.lists,
        [newList.id]: newList
      };
    } else {

      const startCardsIds = Array.from(start.cardIds);
      startCardsIds.splice(source.index, 1);
      const newStart = {
        ...start,
        cardIds: startCardsIds
      };

      const finishCardsIds = Array.from(finish.cardIds);
      finishCardsIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        cardIds: finishCardsIds
      };

      finishIdList = newFinish.id;

      newState = {
        ...state.data.lists,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      };
    }

    dispatch({
      type: DROP_CARD_ACTION_TYPE,
      payload: newState
    });

    await axios.put(`/1/cards/${draggableId}?idList=${finishIdList}&key=${process.env.REACT_APP_TRELLO_KEY}&token=${getToken(state)}`);


  } catch (e) {
    const oldListData = sessionStorage.getItem('oldList');
    dispatch({
      type: SET_BOARD_LIST,
      payload: JSON.parse(oldListData)
		});
		console.log(e);
  }

};

export const addNewList = (e, value) => async (dispatch, getState) => {
	e.preventDefault();
	const state = getState();
	localStorage.setItem('oldList', JSON.stringify(state.data.lists));
	let Lists = state.data.lists;
	let ListOder = state.data.lists.listsOder;
	let name = {name: value, id: 'temp'}
	try {
		let updatedList = Object.assign(Lists, {temp: name});
		ListOder.push('temp');
		let finalList = Object.assign(updatedList, {listsOder: ListOder})
	
		dispatch({
			type: SET_BOARD_LIST,
			payload: finalList
		});

		let idBoard = state.data.details.id;
		

	//await axios.post(`/1/lists?name=${value}&idBoard=${idBoard}&pos=bottom&key=${process.env.REACT_APP_TRELLO_KEY}&token=${localStorage.token}`);

  } catch (e) {
		// const oldCardsData = localStorage.getItem('oldList');
		// dispatch({
		// 	type: SET_BOARD_CARDS,
		// 	payload: JSON.parse(oldCardsData)
		// });
		console.log(e);
	}
}