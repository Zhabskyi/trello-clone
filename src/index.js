import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {ConnectedRouter, connectRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';

import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import appReducer from './store';
import thunk from 'redux-thunk';
import App from './containers/App';

import './index.css';
import {auth} from './store/auth';
import {boards} from './store/boards';
import {board} from './store/board';
import {notifications} from './store/notifications';


const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  // @ts-ignore
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const history = createBrowserHistory();

const customMiddleWare = (store) => (next) => (action) => {
  console.log('Middleware triggered:', action);
  next(action);
};

const rootReducer = combineReducers({
  router: connectRouter(history),
  app: appReducer,
  auth,
  boards,
  board,
  notifications
});

const store = createStore(rootReducer, undefined, composeEnhancers(
  applyMiddleware(
    customMiddleWare,
    thunk
  )
));

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
