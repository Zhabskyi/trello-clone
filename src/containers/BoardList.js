import { connect } from 'react-redux';
import { loading, fetchBoards} from '../store/actions';

import BoardList from '../components/Boards/BoardList';

const mapDispatchToProps = (dispatch) => ({
	loadBoards: () => dispatch(fetchBoards()),
	setLoading: (isLoading) => dispatch(loading(isLoading))
});

const mapStateToProps = (state) => {
  return {
		token: state.token,
		boards: state.boardList,
		isLoading: state.isLoading
  }
};

const BoardListContainer = connect(mapStateToProps, mapDispatchToProps)(BoardList);

export default BoardListContainer;
