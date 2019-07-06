import React from 'react';
import { Link } from 'react-router-dom';

const BoardCard = ({ boardId, name,  backgroundImage }) => {
	return (
		<Link to={`/boards/${boardId}`}>
			<div className='board__card'
					style={{
						background: `url('${backgroundImage}') no-repeat`
					}}>
				<span className="board__card-fade"></span>
				<h3 className='board__card-name'>{name}</h3>
			</div>
		</Link>
	)
}

export default BoardCard;
