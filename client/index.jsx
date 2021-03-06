import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import App from './components/App.jsx';
import rootReducer from './reducers';
import { changeExample } from './actions';

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  applyMiddleware(historyMiddleware),
  (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

store.dispatch(changeExample('Learn about actions'));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>, document.getElementById('app'));
