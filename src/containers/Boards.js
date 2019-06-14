import { connect } from 'react-redux';
import {coolAction, showModal, login } from '../store/actions';

import Boards from '../components/Boards/Boards';

const mapStateToProps = (state) => {
  console.log(state);
  return {
		isShowModal: state.isShowModal,
		
  }
};

const mapDispatchToProps = (dispatch) => ({
	onClick: (clickcounts) => dispatch(coolAction(clickcounts)),
	onModal: (isShowModal) => dispatch(showModal(isShowModal)),
	onLogin: (isAuthenticated) => dispatch(login(isAuthenticated))
	
});

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Boards);

export default BoardContainer;
