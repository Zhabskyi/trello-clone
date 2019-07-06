import React, { Component } from 'react';
import BoardCard from './BoardCard';
import Spinner from '../Spinner/Spinner';


class BoardList extends Component {

	componentDidMount() {
		this.props.loadBoards();
	}

	render() {
		const { isLoading, boards } = this.props;

		if ( isLoading ) {
			return <Spinner/>
		} else {
			return (
				<div className="boards-list">
					{
						boards.map( ({ name, id, prefs }) => (
							<BoardCard
								key={id}
								name={name}
								boardId={id}
								backgroundImage={prefs.backgroundImage}
								id={id} />
						))
					}
				</div>
			)
		}
	}
}

export default BoardList;
