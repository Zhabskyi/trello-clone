import { connect } from 'react-redux';
import { SetToken } from '../components/Login/SetToken';
import {setToken, login} from '../store/actions';


const mapDispatchToProps = (dispatch) => ({
		onSetToken: (token) => dispatch(setToken(token)),
		onLogin: (isAuthenticated) => dispatch(login(isAuthenticated))
});

const SetTokenContainer = connect(undefined, mapDispatchToProps)(SetToken);

export { SetTokenContainer as SetToken };
