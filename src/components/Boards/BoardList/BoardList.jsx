import React, { Component } from 'react';

import axios from '../../../axios-instance';


class BoardList extends Component {

	componentDidMount() {
		this.props.loadBoards(this.getBoards());
	}


	getBoards = () => {
		const boards = [];
		axios.get(`/1/members/me/boards?key=34630d57dfd6a65943e65203196c0e97&token=${this.props.token}`)
		.then( res => {
					boards.push(...res.data)
				}
		)
			.then ( res => console.log(boards))
			.then ( this.props.setLoading())
			.catch (err => console.log('Error on boards request'));
			return boards;
	}


	render() {
		console.log(`=>>>>>>>${this.props.list}`);

		let name = (this.props.list.map( ({ name }) => (
			<li>
				{name}
			</li>
		)));

		if (this.props.isLoading) {
			name = 'Waiting on server......'
		}
		return (
			<div>
				<ul>
					{name}
				</ul>
			</div>
		);
	}
}

export default BoardList;
