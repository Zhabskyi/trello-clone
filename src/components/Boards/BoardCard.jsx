import React from 'react';
import { Link } from 'react-router-dom';

const BoardCard = ({ boardId, name,  backgroundImage }) => {
	return (
		<Link to={`/boards/${boardId}`}>
			<div className='board'
					style={{
						background: `url('${backgroundImage}') no-repeat`,
						backgroundSize: 'cover'
					}}>
				<span className="board-fade"></span>
				<h3 className='board-name'>{name}</h3>
			</div>
		</Link>
	)
}

export default BoardCard;
