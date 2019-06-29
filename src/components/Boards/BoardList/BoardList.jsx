import React, { Component } from 'react';
import Board from '../../../containers/Board';
import Spinner from '../../Spinner/Spinner';


class BoardList extends Component {

	componentDidMount() {
		this.props.loadBoards();
	}


	render() {

		const { isLoading, list } = this.props;
		const board = 	list.map( ({ name, id, prefs }) => (
			<Board 
				key={id}
				name={name}
				backgroundImage={prefs.backgroundImage}
				id={id} />
		));

		if ( isLoading ) {
			return <Spinner/>
		} else {
			return (
				<div className="board-list">
					{ board }
				</div>
			)
		}
	}
}

export default BoardList;
