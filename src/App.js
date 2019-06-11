import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import { Login } from './components/Login/Login';
import Board from './containers/Board';
import { SetToken } from './containers/SetToken';


class App extends Component {
	
	render() {
		return (
			<Switch>
				<Route path="/boards" component={Board}/>
				<Route path="/" exact component={Login} />
				<Route path="/gettoken" component={SetToken} />
			</Switch>
		)
	}
}

export default App
