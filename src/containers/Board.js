import { connect } from 'react-redux';
import {Board} from '../components/Board/Board';
import {fetchBoard, getCards, getDetails, getLists, onDragEnd} from '../store/data';
import {isAuthenticated} from '../store/auth';
import {createLoadingSelector} from '../store/apiRequests';
import {FETCH_BOARD} from '../store/data/actionTypes';

const mapDispatchToProps = (dispatch) => ({
	onDragEnd: (result) => dispatch(onDragEnd(result)),
	loadBoard: (id) => dispatch(fetchBoard(id))
});
debugger;
const getIsLoadingBoard = createLoadingSelector(FETCH_BOARD);

const mapStateToProps = (state) => {
  return {
  	isAuthenticated: isAuthenticated(state),
		board: getDetails(state),
		lists: getLists(state),
		cards: getCards(state),
		isLoadingBoard: getIsLoadingBoard(state)
  }
};

const BoardListContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardListContainer;
