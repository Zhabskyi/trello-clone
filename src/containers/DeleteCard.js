import { connect } from 'react-redux';
import DeleteItem from '../components/DeleteItem/DeleteItem';
import {deleteCard, getCards, getDetails, getLists} from '../store/data';

const mapDispatchToProps = (dispatch) => ({
	deleteItem: (cardId, listId) => dispatch(deleteCard(cardId, listId))
});


const mapStateToProps = (state) => {
  return {
		board: getDetails(state),
		lists: getLists(state),
		cards: getCards(state)
  }
};

const DeleteItemContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteItem);

export default DeleteItemContainer;
