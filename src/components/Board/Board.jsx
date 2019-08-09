import * as React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';

import List from '../../containers/List';
import AddNewList from '../../containers/AddNewList';
import Spinner from '../Spinner/Spinner';

export class Board extends React.PureComponent {
  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.props.loadBoard(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.isAuthenticated && !this.props.isAuthenticated) {
      this.props.loadBoard(this.props.match.params.id);
		}
	}
	

  renderSpinner = () => {
    return <Spinner/>;
  };

  renderList = () => {
    const {lists, cards} = this.props;

    return lists.listsOder.map(listId => {
      const currentList = lists[listId];
      let listsCards = currentList.cardIds.map(cardId => cards[cardId]);
      return <List
        key={currentList.id}
        name={currentList.name}
        cards={listsCards}
        listId={currentList.id}/>;
    });
  };

  renderContent = () => {
    const {board} = this.props;
    if(!board) {
      return null;
    }
    const styles = {
      background: `url('${board.prefs.backgroundImage}') no-repeat `,
      backgroundSize: 'cover'
    };

    return <div className="board-wrapper">
      <DragDropContext onDragEnd={result => this.props.onDragEnd(result)}>
        <div className="board"
             style={styles}>
					{this.renderList()}
					<div className='list-wrapper'>
						<div className='add-list'>
							<AddNewList
								placeholder = '  Add new list...'
								item = 'list' />
						</div>
					</div>
        </div>
      </DragDropContext>
    </div>;
  };

  render() {
    if (!this.props.isAuthenticated || this.props.isLoadingBoard) {
      return this.renderSpinner();
    } else {
      return this.renderContent();
    }
  }
}
