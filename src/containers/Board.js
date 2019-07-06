import { connect } from 'react-redux';
import {Board} from '../components/Board/Board';
import {fetchBoard} from '../store/actions';

const mapDispatchToProps = (dispatch) => ({
  loadBoard: (id) => dispatch(fetchBoard(id))
});

const mapStateToProps = (state) => {
  return {
		board: state.board,
		lists: state.lists,
		cards: state.cards,
		isLoadingBoard: state.isLoadingBoard,
		isLoadingCards: state.isLoadingCards
  }
};

const BoardListContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardListContainer;
