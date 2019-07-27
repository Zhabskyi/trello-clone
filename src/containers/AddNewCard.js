import { connect } from 'react-redux';
import {AddNewCard} from '../components/Card/AddNewCard/AddNewCard';
import {addNewCard, getCards, getDetails, getLists} from '../store/data';

const mapDispatchToProps = (dispatch) => ({
	addNewCard: (e, name) => dispatch(addNewCard(e, name))
});


const mapStateToProps = (state) => {
  return {
		board: getDetails(state),
		lists: getLists(state),
		cards: getCards(state)
  }
};

const AddNewCardContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewCard);

export default AddNewCardContainer;
