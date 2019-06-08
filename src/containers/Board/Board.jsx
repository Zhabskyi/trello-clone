import React, { Component } from 'react';

import './Board.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import NewBoard from '../../containers/NewBoard/NewBoard';

const axios = require('axios');


class Board extends Component {
	state = {
		showModal: false,
		isAuthenticated: true,
		boardName: ''
	};

	signOut = () => {
		this.isAuthenticated = false;
		localStorage.clear();
		this.props.history.push("/");
  }


	handleModalClose = () => {
    this.setState({ showModal: false });
  }

  handleModalShow = () => {
    this.setState({ showModal: true });
	}

	handleBoardName = (e) => {
		this.setState( {boardName: e.target.value} );
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
		return (
			<div>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="#home">Let's be motivated!</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<NavDropdown title="Boards" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1" onClick={this.handleModalShow}>Create new board</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-success">Search</Button>
							<Button variant="outline-secondary" className="btn_signOut" onClick={this.signOut}>Sign Out</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
				<NewBoard  
					show = {this.state.showModal}
					handleModalClose = {this.handleModalClose}
					createBoard = {this.createBoard}
					handleBoardName = {this.handleBoardName}/>
			</div>
		);
	}
}

export default Board;
