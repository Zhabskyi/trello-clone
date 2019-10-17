import { connect } from 'react-redux';
import deleteItem from '../components/DeleteItem/DeleteList';
import {deleteList, getCards, getDetails, getLists} from '../store/data';

const mapDispatchToProps = (dispatch) => ({
	deleteItem: (listId) => dispatch(deleteList(listId))
});


const mapStateToProps = (state) => {
  return {
		board: getDetails(state),
		lists: getLists(state),
		cards: getCards(state)
  }
};

const DeleteItemContainer = connect(mapStateToProps, mapDispatchToProps)(deleteItem);

export default DeleteItemContainer;
