import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './AddNewCard.css';

export class AddNewCard extends Component {

	
	state = {
		isExpanded: false,
		value: ''
	}

	ExpandToggleHandler = (e) => {
		e.preventDefault();
		this.setState((prevState) => {
			return {isExpanded: !prevState.isExpanded};
		});
	}

	resetValue = () => {
		this.setState({value: ''});
	}

	inputChangedHandler = (e) => {
		e.preventDefault();
		this.setState({value: e.target.value});
	}

		


	render() {

		let addCard = '';
		let addForm = 'hide-block';

		if (this.state.isExpanded) {
			addCard = ' hide-block';
			addForm = '';
		}

		return (
				<div className='add-card'>
					<form onSubmit={(e) => {this.props.addNewCard(e, this.state.value); this.resetValue(e)}}>
						<div className={addCard} onClick={this.ExpandToggleHandler}>
							<span>
								<span className='icon-add'></span>
									  Add another card
							</span>
						</div>
						<div className={addForm}>
							<input 
								className='card-name-input' 
								type="text" 
								placeholder='Enter card title...'
								value={this.state.value} 
								onChange={(e) => this.inputChangedHandler(e)}/>
							<div className='submit-section'>
								<Button type="submit"  variant="success">Add Card</Button>
								<button className='button-close btn' onClick={this.ExpandToggleHandler}></button>
							</div>
						</div>
					</form>
				</div>
		)
	}
}

export default AddNewCard;
