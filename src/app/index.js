import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { createBrowserHistory, startListener } from "redux-json-router";
import Redbox from "redbox-react";
import Root from "./Root";
import configureStore from "./store/configureStore";

// create a history singletonx
const history = createBrowserHistory();

// configure store with history
const store = configureStore(history);

// dispatch actions when the history is manually changed (with navigation buttons / address bar)
startListener(history, store);

// Get the DOM Element that will host our React application
const rootEl = document.getElementById("app");

// Render the React application to the DOM
render(
  <AppContainer errorReporter={Redbox}>
    <Root store={store} history={history} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  /**
   * Warning from React Router, caused by react-hot-loader.
   * The warning can be safely ignored, so filter it from the console.
   * Otherwise you'll see it every time something changes.
   * See https://github.com/gaearon/react-hot-loader/issues/298
   */
  const orgError = console.error; // eslint-disable-line no-console
  console.error = (message) => {
    // eslint-disable-line no-console
    if (
      message && message.indexOf("You cannot change <Router routes>;") === -1
    ) {
      // Log the error as normally
      orgError.apply(console, [message]);
    }
  };

  module.hot.accept("./Root", () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require("./Root").default;

    render(
      <AppContainer errorReporter={Redbox}>
        <NextApp store={store} history={history} />
      </AppContainer>,
      rootEl
    );
  });
}
