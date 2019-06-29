import React, { Component } from 'react';

import List from './List';
import Spinner from '../Spinner/Spinner';

export class Lists extends Component {
	componentDidMount() {
		this.props.loadLists();
	}


	render() {

		const { isLoading, lists } = this.props;
		const list = 	lists.map( ({ name, id }) => (
			<List 
				key={id}
				name={name}/>
		));

		if ( isLoading ) {
			return <Spinner/>
		} else {
			return (
				<div className="board-list">
					{ list }
				</div>
			)
		}
	}
}

export default Lists;
