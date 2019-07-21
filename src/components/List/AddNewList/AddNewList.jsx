import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './AddNewList.css';

export class AddNewList extends Component {

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

		let addList = '';
		let addForm = 'hide-block';

		if (this.state.isExpanded) {
			addList = ' hide-block';
			addForm = '';
		}

		return (
			<div className='list-wrapper'	>
				<div className='list add-list'>
					<form onSubmit={(e) => {this.props.addNewList(e, this.state.value); this.resetValue(e)}}>
						<div className={addList} onClick={this.ExpandToggleHandler}>
							<span>
								<span className='icon-add'></span>
									  Add another list
							</span>
						</div>
						<div className={addForm}>
							<input 
								className='list-name-input' 
								type="text" 
								placeholder='Enter list title...'
								value={this.state.value} 
								onChange={(e) => this.inputChangedHandler(e)}/>
							<div className='submit-section'>
								<Button type="submit"  variant="success">Add List</Button>
								<button className='button-close btn' onClick={this.ExpandToggleHandler}></button>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default AddNewList;
