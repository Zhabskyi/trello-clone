import React from 'react';
import { Link } from 'react-router-dom';

const Board = ({ name, backgroundImage, id, choosenList }) => {
	return (
		<Link to={`/list/${name}`}>
			<div onClick={() => choosenList(id)} className='board' 
					style={{ background: `url('${backgroundImage}') no-repeat`, 
									backgroundSize: 'cover', 
									
									}}>
				<span className="board-fade"></span>
				<h3 className='board-name'>{name}</h3>
			</div>
		</Link>
	)
}

export default Board;