import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import './AddNewItem.css';

export class AddNewList extends Component {

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
      <div className='list-wrapper'>
        <div className='list add-list'>
          <form onSubmit={this.onSubmit}>
            <div className={addItem} onClick={this.ExpandToggleHandler}>
							<span>
								<span className='icon-add'></span>
									  Add another list
							</span>
            </div>
            <div className={addForm}>
              <input
                className='list-name-input'
                type="text"
                placeholder='Enter list title...'
                value={this.state.value}
                onChange={(e) => this.inputChangedHandler(e)}/>
              <div className='submit-section'>
                <Button type="submit" variant="success">Add List</Button>
                <button className='button-close btn' onClick={this.ExpandToggleHandler}></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddNewList;
