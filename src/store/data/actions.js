import axios from '../../axios-instance';
import {
  SET_BOARDS,
  SET_BOARD,
  SET_BOARD_CARDS,
  SET_BOARD_LIST,
  DROP_CARD_ACTION_TYPE, FETCH_BOARD_REQUEST, FETCH_BOARD_SUCCEED, FETCH_BOARDS_REQUEST
} from './actionTypes';
import {authError} from '../auth';
import {getToken} from '../auth';
import {List} from './models/list';

export const fetchBoards = () => async (dispatch) => {
  dispatch({
    type: FETCH_BOARDS_REQUEST,
  });
  try {
    // const state = getState();
    const response = await axios.get(`/1/members/me/boards?key=${process.env.REACT_APP_TRELLO_KEY}&token=${localStorage.token}`);
    dispatch({
      type: SET_BOARDS,
      payload: response.data
    });
  } catch (e) {
    if (e.response && e.response.status === 401) {
      dispatch(authError());
    } else {
      alert(e.response.message);
    }
  }
};


export const fetchBoard = (id) => async (dispatch, getState) => {
  dispatch({
    type: FETCH_BOARD_REQUEST
  });
  try {
    const state = getState();
    const token = getToken(state);
    let lists = await axios.get(`/1/boards/${id}/lists?key=${process.env.REACT_APP_TRELLO_KEY}&token=${token}`);
    const cards = await axios.get(`/1/boards/${id}/cards?key=${process.env.REACT_APP_TRELLO_KEY}&token=${token}`);
    const board = await axios.get(`/1/boards/${id}?key=${process.env.REACT_APP_TRELLO_KEY}&token=${token}`);

    let trelloList = lists.data;

    trelloList.forEach(el => {
      Object.assign(el, {cardIds: []});
    });

		const cardsData = cards.data;

    const arrayOfListsId = [];
    const arrayOfCardsId = [];

    trelloList.forEach(el => {
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

    trelloList.forEach(el => {
      for (let i = 0; i < cardsData.length; i++) {
        if (cardsData[i].idList === el.id) {
          el.cardIds.push(cardsData[i].id);
        }
      }
    });

    let objLists = arrayToObject(trelloList);
    Object.assign(objLists, {listsOder: arrayOfListsId});

    dispatch({
      type: SET_BOARD_CARDS,
      payload: ObjCards
    });
    dispatch({
      type: SET_BOARD_LIST,
      payload: objLists
    });
    dispatch({
      type: SET_BOARD,
      payload: board.data
    });
    dispatch({
      type: FETCH_BOARD_SUCCEED
    });
  } catch (e) {
    throw e;
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

export const addList = (value) => async (dispatch, getState) => {
  const state = getState();
  let lists = {...state.data.lists};
  let listsOder = [...state.data.lists.listsOder];
  try {
    let idBoard = state.data.details.id;
    const responseData = await axios.post(`/1/lists?name=${value}&idBoard=${idBoard}&pos=bottom&key=${process.env.REACT_APP_TRELLO_KEY}&token=${localStorage.token}`);
    let list = List.fromExisting(responseData.data);
    let updatedList = {...lists, [list.id]:list};
    listsOder.push(list.id);
    let finalList = {...updatedList, listsOder: listsOder};
    dispatch({
      type: SET_BOARD_LIST,
      payload: finalList
    });
  } catch (e) {
    // const oldCardsData = localStorage.getItem('oldList');
    // dispatch({
    // 	type: SET_BOARD_LIST,
    // 	payload: JSON.parse(oldCardsData)
    // });
    console.log(e);
  }
};

export const addNewCard = (value, listId) => async (dispatch, getState) => {
	const state = getState();
	let cards = {...state.data.cards};
	let lists = {...state.data.lists};
	try {
		const response = await axios.post(`/1/cards?name=${value}&idList=${listId}&key=${process.env.REACT_APP_TRELLO_KEY}&token=${localStorage.token}`);

		const updatedCards = {...cards, [response.data.id]: response.data };

		for (const key in lists) {
			if ( key === response.data.idList) {
				lists[key].cardIds.push(response.data.id);
			}
		}
	
		dispatch({
      type: SET_BOARD_CARDS,
      payload: updatedCards
		});
		dispatch({
      type: SET_BOARD_LIST,
      payload: lists
    });

	} catch (e) {
		console.log(e)
	}
};

export const deleteCard = (cardId, listId) => async (dispatch, getState) => {
	const state = getState();
	let lists = {...state.data.lists};
	let cards = {...state.data.cards};
	
	try {
		const response = await axios.delete(`/1/cards/${cardId}?key=${process.env.REACT_APP_TRELLO_KEY}&token=${localStorage.token}`);
	
		delete cards[cardId];
		for (const key in lists) {
			if ( key === listId) {
				const index = lists[key].cardIds.indexOf(cardId);
				if (index > -1) {
					lists[key].cardIds.splice(index, 1);
				}
			}
		}

		dispatch({
			type: SET_BOARD_CARDS,
			payload: cards
		});
		dispatch({
      type: SET_BOARD_LIST,
      payload: lists
		});
		
	} catch (e) {
		console.log(e)
	}
};