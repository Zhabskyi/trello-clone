import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Login from './containers/Login/Login';
import Board from './containers/Board/Board';


class App extends Component {

	state ={
		
	}

	
	render() {
		return (
			<Switch>
				<Route path="/boards" component={Board}/>
				<Route path="/" exact component={Login} />
			</Switch>
		)
	}
}

export default App
