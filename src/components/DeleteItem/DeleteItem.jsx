import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

const DeleteItem = props => {
	const { cardId, listId } = props;
	return (
		<div className='delete-button'
			onClick={() => props.deleteItem(cardId, listId)}>
			<FontAwesomeIcon icon={faTrashAlt} />
		</div>
	)
}

export default DeleteItem;
