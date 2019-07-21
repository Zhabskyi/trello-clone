import * as React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import List from '../../containers/List';
import AddNewList from '../../containers/AddNewList';
import Spinner from '../Spinner/Spinner';

export class Board extends React.PureComponent {
  componentWillMount() {
	 this.props.loadBoard(this.props.match.params.id);
	 //debugger;
	}
	

  render() {
    console.log(this.props);
		const {board, lists, cards } = this.props;
		if ( this.props.isLoadingBoard ) {
			return <Spinner/>
		} else {
			return (
				<div className="board-wrapper">
					<DragDropContext onDragEnd={result => this.props.onDragEnd(result)}>
						<div className="board"
								style={{
									background: `url('${board.prefs.backgroundImage}') no-repeat `,
									backgroundSize: 'cover'
								}}>

								{lists.listsOder.map(listId => {
									const list = lists[listId];
									let Cards = list.cardIds.map(
										cardId => cards[cardId]
									)
									//debugger;
							
				
									return (
										<List key={list.id} name={list.name} cards={Cards} listId={list.id}/>
									);
								})}
							<AddNewList />
						</div>
					</DragDropContext>
				</div>
			);
 		}
	}
}