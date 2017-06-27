// @flow

import React, { PropTypes } from "react";
import { Provider } from "react-redux";

import Routes from "./routes";

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

const Root = ({ store }) => {
  let ComponentEl = (
    <Provider store={store}>
      <Routes />
    </Provider>
  );

  if (process.env.NODE_ENV !== "production") {
    const DevTools = require("./DevTools").default;

    ComponentEl = (
      <Provider store={store}>
        <div>
          <Routes />
          {!window.devToolsExtension ? <DevTools /> : null}
        </div>
      </Provider>
    );
  }

  return ComponentEl;
};

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
