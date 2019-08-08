import { connect } from 'react-redux';
import {AddNewItem} from '../components/AddNewItem/AddNewItem';
import {addList, getCards, getDetails, getLists} from '../store/data';

const mapDispatchToProps = (dispatch) => ({
	addNewItem: (name) => dispatch(addList(name))
});


const mapStateToProps = (state) => {
  return {
		board: getDetails(state),
		lists: getLists(state),
		cards: getCards(state)
  }
};

const AddNewListContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewItem);

export default AddNewListContainer;
