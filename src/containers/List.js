import { connect } from 'react-redux';
import {List} from '../components/List/List';
import { getLists } from '../store/board';


const mapDispatchToProps = () => ({

});

const mapStateToProps = (state) => {
  return {
		lists: getLists(state),
		isDragging: state.app.isDragging,
  }
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
