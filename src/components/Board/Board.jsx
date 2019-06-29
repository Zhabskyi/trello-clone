import * as React from 'react';

export class Board extends React.PureComponent {
  componentDidMount() {
    this.props.loadBoard(this.props.match.params.id);
  }

  render() {
    console.log(this.props.match.params.id);
    return <>
      <h1>{this.props.match.params.id}</h1>
    </>
  }
}
