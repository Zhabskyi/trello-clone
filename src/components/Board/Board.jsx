import * as React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import List from '../../containers/List';

export class Board extends React.PureComponent {
  componentDidMount() {
    this.props.loadBoard(this.props.match.params.id);
	}
	

  render() {
    console.log(this.props.match.params.id);
		const {board, lists, cards } = this.props;
    if(!board) {
      return null;
    }
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
								const Cards = list.cardIds.map(
									cardId => cards[cardId]
								)
						
			
								return (
									<List key={list.id} name={list.name} cards={Cards} listId={list.id}/>
								);
							})}

					</div>
				</DragDropContext>
			</div>
    );
  }
}
