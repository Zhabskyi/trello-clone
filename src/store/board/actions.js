import axios from '../../axios-instance';
import {
  SET_BOARD,
  SET_BOARD_CARDS,
  SET_BOARD_LIST,
  DROP_CARD_ACTION_TYPE
} from './actionTypes';
import {getToken} from '../auth';

export const fetchBoard = (id) => async (dispatch, getState) => {
  try {
    const state = getState();
    let lists = await axios.get(`/1/boards/${id}/lists?key=${process.env.REACT_APP_TRELLO_KEY}&token=${getToken(state)}`);
    const cards = await axios.get(`/1/boards/${id}/cards?key=${process.env.REACT_APP_TRELLO_KEY}&token=${getToken(state)}`);
    const board = await axios.get(`/1/boards/${id}?key=${process.env.REACT_APP_TRELLO_KEY}&token=${getToken(state)}`);

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
    sessionStorage.setItem('oldList', JSON.stringify(state.board.lists));
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

    const start = state.board.lists[source.droppableId];
    const finish = state.board.lists[destination.droppableId];

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

      newState = {
        ...state.board.lists,
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
        ...state.board.lists,
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
