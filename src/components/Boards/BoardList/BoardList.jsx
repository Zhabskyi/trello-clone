import React, { Component } from 'react';


class BoardList extends Component {

	componentDidMount() {
		this.props.loadBoards();
	}


	render() {
		console.log(this.props.list);

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
