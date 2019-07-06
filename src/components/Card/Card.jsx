import React, { Component } from 'react';


export default class Card extends Component {


	render() {

		const { name, idCard, drag, noAllowDrop } = this.props;
		console.log(this.props);

		return (
			<div 
				id={idCard} 
				draggable='true' 
				onDragStart={(e) => drag(e, idCard )}
				onDragOver={(e) => noAllowDrop(e)}
				className='card-wrapper'>
				 <div className="card" >
						<span className="card-name">{name}</span>
					</div>
			</div>
		)
	}
}