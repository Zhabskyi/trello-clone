import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { withRouter } from 'react-router-dom';
import NewBoard from '../../containers/NewBoard';
import './Navigation.css';




const axios = require('axios');


class Navigation extends Component {

	signOut = () => {
		localStorage.clear();
		this.props.history.push("/");
  }


	createBoard = () => {
		let name = this.state.boardName;
		let token = localStorage.trello_token;
		let key = '';
		axios.post('https://api.trello.com/1/boards/', null, { params: {
			name,
			token,
			key
		}})
			.then((res) => console.log(res));
	}

	render() {
		const { onModal } = this.props;

		return (
			<div className='navigation'>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand >Let's be motivated!</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Form inline>
							<Button variant="outline-secondary" className="btn_signOut" onClick={() => {this.signOut()}}>Sign Out</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
				<NewBoard
					show = {onModal}
					createBoard = {this.createBoard}/>
			</div>
		);
	}
}

export default withRouter(Navigation);
