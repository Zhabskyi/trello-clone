import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import appReducer from './store';
import thunk from 'redux-thunk'

import './index.css';
import App from './App';

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
	// @ts-ignore
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	: compose;


const customMiddleWare = (store) => (next) => (action) => {
	console.log("Middleware triggered:", action);
	next(action);
};


const store = createStore(appReducer, undefined, composeEnhancers(applyMiddleware(thunk)));


const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'));
