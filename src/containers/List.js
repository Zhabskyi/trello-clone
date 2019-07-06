import { connect } from 'react-redux';
import {List} from '../components/List/List';
import { dragCard,  dropCard, getListId } from '../store/actions';

const mapDispatchToProps = (dispatch) => ({
	dragCard: (e, id ) => dispatch(dragCard(e, id )),
	dropCard: (e, listId) => dispatch(dropCard(e, listId)),
	getListId: (e) => dispatch(getListId(e)),
});

const mapStateToProps = (state) => {
  return {
		cards: state.cards,
		isDragging: state.isDragging,
  }
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
