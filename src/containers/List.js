import { connect } from 'react-redux';
import {List} from '../components/List/List';
import { getLists, getIsLoadingBoard } from '../store/data';


const mapDispatchToProps = () => ({

});

const mapStateToProps = (state) => {
  return {
		lists: getLists(state),
		isLoadingBoard: getIsLoadingBoard(state),
		isDragging: state.app.isDragging,
  }
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
