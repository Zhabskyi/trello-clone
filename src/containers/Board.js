import { connect } from 'react-redux';
import { loading, fetchLists} from '../store/actions';

import Board from '../components/Boards/Board';

const mapDispatchToProps = (dispatch) => ({
	choosenList: (id) => dispatch(fetchLists(id)),
	setLoading: (isLoading) => dispatch(loading(isLoading))
});

const mapStateToProps = () => ({});

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardContainer;
