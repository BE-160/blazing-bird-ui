import React from "react";
import { Router, Link } from "redux-json-router";
import routes from "./routes.json";

// components load their module for initial visit

const Routes = () => (
  <div>
    <Link to="/">Home</Link><br />
    <Link to="/docs">Docs</Link><br />
    <Link to="/docs/1">Post Child</Link><br />
    <Link to="/sdfsd">Error</Link><br />
    <Link to="/counter">Counter</Link>
    <Router routes={routes} />
  </div>
);

export default Routes;
