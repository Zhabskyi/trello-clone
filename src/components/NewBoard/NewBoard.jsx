import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewBoard = (props) => {
	const {onSetName} = props;
			return ( 
			<>
			<Modal show={props.isShowModal} >
				<Modal.Header closeButton>
					<Modal.Title>BOARD</Modal.Title>
				</Modal.Header>
				<Modal.Body>Create new boar!</Modal.Body>
				<Form>
					<Form.Group controlId="formGroupBoard">
						<Form.Label>New board name</Form.Label>
						<Form.Control type="text" placeholder="Enter board name" onChange={(e) => onSetName(e.target.value)} />
					</Form.Group>
				</Form>
				<Modal.Footer>
					<Button variant="secondary" onClick = {() => props.onModal()}>
						Close
					</Button>
					<Button variant="primary" onClick = {() => props.onModal()}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
			</>
		);
	}

export default NewBoard;
