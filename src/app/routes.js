import React from "react";
//import { Router, Link } from "redux-json-router";
//import routes from "./routes.json";
import { ConnectedRouter } from "react-router-redux";
import { Link } from "react-router-dom";
import { Route } from "react-router";
import Counter from "./features/Counter/";
import Home from "./features/Home/";
import PropTypes from "prop-types";
// components load their module for initial visit

const Routes = ({ history }) => (
  <div>
    <ConnectedRouter history={history}>
      <div>
        <Link to="/">Home</Link><br />
        <Link to="/docs">Docs</Link><br />
        <Link to="/docs/1">Post Child</Link><br />
        <Link to="/sdfsd">Error</Link><br />
        <Link to="/counter">Counter</Link>

        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
      </div>
    </ConnectedRouter>
  </div>
);

Routes.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object
};

export default Routes;
