import { connect } from 'react-redux';
import {AddNewItem} from '../components/AddNewItem/AddNewItem';
import {addNewCard, getCards, getDetails, getLists} from '../store/data';

const mapDispatchToProps = (dispatch) => ({
	addNewItem: (e, name) => dispatch(addNewCard(e, name))
});


const mapStateToProps = (state) => {
  return {
		board: getDetails(state),
		lists: getLists(state),
		cards: getCards(state)
  }
};

const AddNewCardContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewItem);

export default AddNewCardContainer;
