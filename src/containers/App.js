import { connect } from 'react-redux';
import {validateToken} from '../store/auth';
import App from '../App';

const mapDispatchToProps = (dispatch) => ({
  validateToken: () => dispatch(validateToken())
});

const mapStateToProps = () => {
  return {}
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
