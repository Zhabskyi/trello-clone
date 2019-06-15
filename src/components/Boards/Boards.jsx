import React, { Component } from 'react';

import './Boards.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Counter from '../../containers/Counter';
import BoardList from '../../containers/BoardList';

import NewBoard from '../../containers/NewBoard';

const axios = require('axios');


class Boards extends Component {

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
		const {onClick, onModal, onLogin} = this.props;

		return (
			<div>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="#home">Let's be motivated!</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<NavDropdown title="Boards" id="basic-nav-dropdown">
								<NavDropdown.Item onClick = {() => onModal()}>Create new board</NavDropdown.Item>
								<NavDropdown.Divider />
							</NavDropdown>
						</Nav>
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-success">Search</Button>
							<Button variant="outline-secondary" className="btn_signOut" onClick={() => {onLogin(); this.signOut()}}>Sign Out</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
				<NewBoard
					show = {onModal}
					createBoard = {this.createBoard}/>
					<Button onClick = {() => onClick()}>COOL ACTION</Button>
				<Counter />
				<BoardList />
			</div>
		);
	}
}

export default Boards;
