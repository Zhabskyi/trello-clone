import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Card from '../Card/Card';

const getListStyle = (isDraggingOver, draggableStyle) => ({
	background: isDraggingOver ? "#b4cfe0" : "inherit",
	transition: 'background-color 0.2s ease',
	...draggableStyle
});


export class List extends React.PureComponent {


  render() {

		const { listId, name, cards } = this.props;
		
    if(!cards) {
      return null;
    }
				return	( 
				<div className='list-wrapper'	>
						<div className="list">
							<div className='list-name'>
								{name}
								<Droppable droppableId={listId}>
									{(provided, snapshot) => (
										<div className='list-card' 
											provided={provided}
											ref={provided.innerRef}
											style={getListStyle(snapshot.isDraggingOver)}
											{...provided.droppableProps}
										>	
											{cards.map((card, index) => (
											<Card key={card.id} card={card} index={index} />
											))}
											{provided.placeholder}
										</div>
									)}
								</Droppable>
							</div>
						</div>
				</div>	
			)}
	}
