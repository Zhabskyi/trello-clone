import { connect } from 'react-redux';
import {AddNewList} from '../components/List/AddNewList/AddNewList';
import {addNewList, getCards, getDetails, getLists} from '../store/data';

const mapDispatchToProps = (dispatch) => ({
	addNewList: (e, name) => dispatch(addNewList(e, name))
});


const mapStateToProps = (state) => {
  return {
		board: getDetails(state),
		lists: getLists(state),
		cards: getCards(state)
  }
};

const AddNewListContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewList);

export default AddNewListContainer;
