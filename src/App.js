import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import {Login} from './components/Login/Login';
import {SetToken} from './containers/SetToken';
import Board from './containers/Board';
import BoardList from './containers/BoardList';
import Navigation from './components/Navbar/Navigation';

class App extends Component {

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
      </div>
    );
  }
}

export default App;
