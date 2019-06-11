import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import appReducer from './store';

import './index.css';
import App from './App';

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
	// @ts-ignore
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	: compose;


const store = createStore(appReducer, undefined, composeEnhancers());


const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'));
