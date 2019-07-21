import {connect} from 'react-redux';

import BoardList from '../components/Boards/BoardList';
import {fetchBoards, getBoards} from '../store/data';
import {getToken} from '../store/auth';

const mapDispatchToProps = (dispatch) => ({
  loadBoards: () => dispatch(fetchBoards()),
});

const mapStateToProps = (state) => {
  return {
    token: getToken(state),
    boards: getBoards(state)
  };
};

const BoardListContainer = connect(mapStateToProps, mapDispatchToProps)(BoardList);

export default BoardListContainer;
