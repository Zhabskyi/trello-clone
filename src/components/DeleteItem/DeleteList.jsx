import React from 'react';

const DeleteItem = props => {
	const { listId } = props;
	return (
		<div className='delete-button_list'
			onClick={() => props.deleteItem(listId)}>
		</div>
	)
}

export default DeleteItem;
