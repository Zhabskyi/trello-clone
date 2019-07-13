import { connect } from 'react-redux';
import {Board} from '../components/Board/Board';
import {fetchBoard, getCards, getDetails, getLists, onDragEnd} from '../store/board';

const mapDispatchToProps = (dispatch) => ({
	loadBoard: (id) => dispatch(fetchBoard(id)),
	onDragEnd: (result) => dispatch(onDragEnd(result))
});

const mapStateToProps = (state) => {
  return {
		board: getDetails(state),
		lists: getLists(state),
		cards: getCards(state)
  }
};

const BoardListContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardListContainer;
