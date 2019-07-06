import * as React from 'react';

import Spinner from '../Spinner/Spinner';
import Card from '../Card/Card';


export class List extends React.PureComponent {

	allowDrop = (e) => {
		e.preventDefault();
	}

	noAllowDrop = (e) => {
		e.stopPropagation();
	}



  render() {

		const { listId, name, cards, isLoadingCards, dragCard, dropCard, getListId } = this.props;
		let cardList =[];
		for (let i = 0; i < cards.length; i++) {
			const idList = cards[i].idList;
			if (listId === idList) {
				cardList.push(cards[i]);
			}
		}

		
			if ( isLoadingCards ) {
				return <Spinner/>
			} else {
				return	( 
				<div className='list-wrapper'
					onDrop={(e) => dropCard(e, this.props.listId)}
					onDragOver={(e) => this.allowDrop(e)}
					onDragEnter={(e) => getListId(e)}>
						<div className="list" id ={listId}>
							<div className='list-name'>
								{name}
								<div className='list-card' id='drop'>	
									{cardList.map(( {id, name } ) => (
											<Card
													key={id}
													name={name}
													idCard={id}
													drag={(e, id ) => {dragCard(e, id)}}
													noAllowDrop={this.noAllowDrop}/>
									))}
								</div>
							</div>
						</div>
				</div>	
			)}
	}
}
