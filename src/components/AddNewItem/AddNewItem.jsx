import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import './AddNewItem.css';

export class AddNewItem extends Component {

  state = {
    isExpanded: false,
    value: ''
  };

  ExpandToggleHandler = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {isExpanded: !prevState.isExpanded};
    });
  };

  resetValue = () => {
    this.setState({value: ''});
  };

  inputChangedHandler = (e) => {
    e.preventDefault();
    this.setState({value: e.target.value});
  };

  onSubmit = (e) => {
		e.preventDefault();
		debugger;
    this.props.addNewItem(this.state.value);
    this.resetValue(e);
  };


  render() {

    let addItem = '';
    let addForm = 'hide-block';

    if (this.state.isExpanded) {
      addItem = ' hide-block';
      addForm = '';
    }

    return (
        <div className='add-item'>
          <form onSubmit={this.onSubmit}>
            <div className={addItem} onClick={this.ExpandToggleHandler}>
							<span>
								<span className='icon-add'></span>
									  Add another {this.props.item}
							</span>
            </div>
            <div className={addForm}>
              <input
                className='name-input'
                type="text"
                placeholder = {this.props.placeholder}
                value={this.state.value}
                onChange={(e) => this.inputChangedHandler(e)}/>
              <div className='submit-section'>
                <Button type="submit" variant="success">Add {this.props.item}</Button>
                <button className='button-close btn' onClick={this.ExpandToggleHandler}></button>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default AddNewItem;
