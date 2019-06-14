import { connect } from 'react-redux';
import { loadList, loading } from '../store/actions';

import BoardList from '../components/Boards/BoardList/BoardList';

const mapDispatchToProps = (dispatch) => ({
	loadBoards: (boardList) => dispatch(loadList(boardList)),
	setLoading: (isLoading) => dispatch(loading(isLoading))
});

const mapStateToProps = (state) => {
  return {
		token: state.token,
		list: state.boardList,
		isLoading: state.isLoading
  }
};

const BoardListContainer = connect(mapStateToProps, mapDispatchToProps)(BoardList);

export default BoardListContainer;
