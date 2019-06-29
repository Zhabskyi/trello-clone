import React from 'react';

const List = ({ name }) => {
	return (
			<div className='lists' >
				<h3 className='lists__name'>{name}</h3>
			</div>
	)
}

export default List;