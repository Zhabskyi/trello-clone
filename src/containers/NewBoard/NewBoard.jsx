import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewBoard = (props) => {
			return ( 
			<>
			<Modal show={props.show} onHide={props.handleModalClose}>
				<Modal.Header closeButton>
					<Modal.Title>BOARD</Modal.Title>
				</Modal.Header>
				<Modal.Body>Create new boar!</Modal.Body>
				<Form>
					<Form.Group controlId="formGroupBoard">
						<Form.Label>New board name</Form.Label>
						<Form.Control type="text" placeholder="Enter board name" onChange={props.handleBoardName} />
					</Form.Group>
				</Form>
				<Modal.Footer>
					<Button variant="secondary" onClick={props.handleModalClose}>
						Close
					</Button>
					<Button variant="primary" onClick={() => {props.handleModalClose(); props.createBoard()}}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
			</>
		);
	}

export default NewBoard;
