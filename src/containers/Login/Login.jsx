import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';


class Login extends Component {

	state = {
		token: '',
		isAuthenticated: false
	}

	componentDidMount () {
		const script = document.createElement("script");
		const JqueryScript = document.createElement("script");

		JqueryScript.src="https://code.jquery.com/jquery-3.4.1.min.js";
		JqueryScript.crossorigin="anonymous";

    script.src = "https://api.trello.com/1/client.js?key=46903497116c00582d5c680bb91c6e93";
    script.async = true;

		document.body.appendChild(JqueryScript);
		document.body.appendChild(script);
}

	onAuthorizeSuccessful = () => {
		const token = window.Trello.token();
		this.setState( {token: token} );
		console.log(this.state.token);
		this.setState ( {isAuthenticated: true} );
  	//window.location.replace("/boards");    another way to redirect without React Router
	}

	authenticationFailure = () => {
		console.log('Error to Authorize');
	}

	login = () => {
		window.Trello.authorize({
			name: "Tasks to do",
			type: "popup",
			interactive: true,
			expiration: "1hour",
			persist: true,
			success: this.onAuthorizeSuccessful,
			error: this.authenticationFailure,
			scope: { write: true, read: true },
		});
	}

	renderRedirect = () => {
    if (this.state.isAuthenticated) {
      return <Redirect to='/boards' />
    }
	}
	
	render() {
		return (
			<>
			{this.renderRedirect()}
				<Jumbotron>
					<h1>Welcome!</h1>
					<p>
						This is a simple task manager. To start to work with the maneger
						log in with link below and let's see what have to be done today!
					</p>
					<p>
						<Button variant="primary" onClick={this.login}>Login with Trello account</Button>
					</p>
				</Jumbotron>
		</>
		)
	}
}

export default Login
