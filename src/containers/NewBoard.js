import { connect } from 'react-redux';
import { showModal } from '../store/actions';
import NewBoard from '../components/NewBoard/NewBoard';

const mapDispatchToProps = (dispatch) => ({
	onModal: (isShowModal) => dispatch(showModal(isShowModal)),
});
const mapStateToProps = (state) => {
  return {
    isShowModal: state.isShowModal
  }
};

const NewBoardContainer = connect(mapStateToProps, mapDispatchToProps)(NewBoard);

export default NewBoardContainer;