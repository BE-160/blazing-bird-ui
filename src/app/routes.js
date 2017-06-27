import React from "react";
import { Router, Link } from "redux-json-router";
import routes from "./routes.json";

// components load their module for initial visit

const Routes = () => (
  <div>
    <Link to="/">Home</Link><br />
    <Link to="/docs">Post</Link><br />
    <Link to="/docs/1">Post child</Link><br />
    <Link to="/sdfsd">Error</Link>
    <Router routes={routes} />
  </div>
);

export default Routes;
