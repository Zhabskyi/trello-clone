import { connect } from 'react-redux';
import {Board} from '../components/Board/Board';
import {fetchBoard, getCards, getDetails, getLists, getIsLoadingBoard, onDragEnd} from '../store/data';

const mapDispatchToProps = (dispatch) => ({
	onDragEnd: (result) => dispatch(onDragEnd(result)),
	loadBoard: (id) => dispatch(fetchBoard(id))
});

const mapStateToProps = (state) => {
  return {
		board: getDetails(state),
		lists: getLists(state),
		cards: getCards(state),
		isLoadingBoard: getIsLoadingBoard(state)
  }
};

const BoardListContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardListContainer;
