import { connect } from 'react-redux';
import { showModal, boardName } from '../store/actions';
import NewBoard from '../components/NewBoard/NewBoard';

const mapDispatchToProps = (dispatch) => ({
	onModal: (isShowModal) => dispatch(showModal(isShowModal)),
	onSetName: (BoardName) => dispatch(boardName(BoardName))
});
const mapStateToProps = (state) => {
  return {
    isShowModal: state.app.isShowModal
  }
};

const NewBoardContainer = connect(mapStateToProps, mapDispatchToProps)(NewBoard);

export default NewBoardContainer;
