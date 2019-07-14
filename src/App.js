import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import {Login} from './components/Login/Login';
import {SetToken} from './containers/SetToken';
import Board from './containers/Board';
import BoardList from './containers/BoardList';
import Navigation from './components/Navbar/Navigation';
import NotificationsBarContainer from './containers/Notifications';

class App extends Component {
  componentDidMount() {
    this.props.validateToken()
  }

  render() {
    return (
      <div className='page-wrapper'>
        <Navigation />
        <Switch>
          <Route exact={true} path="/boards" component={BoardList}/>
          <Route path="/boards/:id" component={Board}/>
          <Route path="/" exact component={Login}/>
          <Route path="/gettoken" component={SetToken}/>
        </Switch>
        <NotificationsBarContainer />
      </div>
    );
  }
}

export default App;
