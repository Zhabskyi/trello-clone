import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const getItemStyle = (isdragging, draggableStyle) => ({
  userSelect: "none",
  background: isdragging ? "#ededed" : "white",
  ...draggableStyle
});


export default class Card extends Component {
	render() {
		const { card, index } = this.props;

		return (
			<Draggable draggableId={card.id} index={index}>
				{(provided, snapshot) => (
					<div
						provided={provided}
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						isdragging={snapshot.isDragging}
						id={card.id}
						style={getItemStyle(
							snapshot.isDragging,
							provided.draggableProps.style
						)} 
						className='card-wrapper'>
								<span className="card-name">{card.name}</span>
					</div>
				)}
			</Draggable>
		)
	}
}
