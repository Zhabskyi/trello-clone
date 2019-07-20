import {connect} from 'react-redux';

import BoardList from '../components/Boards/BoardList';
import {fetchBoards, getBoards} from '../store/data';

const mapDispatchToProps = (dispatch) => ({
  loadBoards: () => dispatch(fetchBoards()),
});

const mapStateToProps = (state) => {
  return {
    token: state.app.token,
    boards: getBoards(state)
  };
};

const BoardListContainer = connect(mapStateToProps, mapDispatchToProps)(BoardList);

export default BoardListContainer;
