import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory, startListener, Router } from 'redux-json-router';
import routes from './routes.json';
import { configureStore } from './store/store';

// create a history singleton
const history = createBrowserHistory();

// configure store with history
const store = configureStore(history);

// dispatch actions when the history is manually changed (with navigation buttons / address bar)
startListener(history, store);

// render the application with <Router /> to match the current URL to the routing config
render(
  <Provider store={store}>
    <Router routes={routes} />
  </Provider>,
  document.getElementById('app'));