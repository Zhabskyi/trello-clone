import * as React from 'react';

import Spinner from '../Spinner/Spinner';
import List from '../../containers/List';


export class Board extends React.PureComponent {
  componentDidMount() {
		this.props.loadBoard(this.props.match.params.id);
	}

  render() {
		console.log(this.props.match.params.id);
		const { board, lists, isLoadingBoard } = this.props;

			if ( isLoadingBoard ) {
				return <Spinner/>
			} else {
				return (
					<div className="board-wrapper">
						<div className="board"
						style={{
							background: `url('${board.prefs.backgroundImage}') no-repeat `,
							backgroundSize: 'cover'
						}}>
						{
							lists.map( ({ name, id }) => (
								<List
									key={id}
									name={name}
									listId={id} />
							))
						}
						</div>
					</div>
				)
			}
	}
}
