import { connect } from 'react-redux';
import {coolAction, showModal, login } from '../store/actions';

import Navigation from '../components/Navbar/Navigation';

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

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default NavigationContainer;
