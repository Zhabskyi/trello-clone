import { connect } from 'react-redux';
import { loading, fetchLists} from '../store/actions';

import Lists from '../components/List/Lists';

const mapDispatchToProps = (dispatch) => ({
	loadLists: () => dispatch(fetchLists()),
	setLoading: (isLoading) => dispatch(loading(isLoading))
});

const mapStateToProps = (state) => {
  return {
		lists: state.lists
  }
};

const ListsContainer = connect(mapStateToProps, mapDispatchToProps)(Lists);

export default ListsContainer;
