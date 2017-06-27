import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import { routerMiddleware } from "redux-json-router";

import rootReducer from "../reducer";

export default function configureStore(history, initialState) {
  const enhancer = compose(
    applyMiddleware(routerMiddleware(history), promiseMiddleware())
  )(createStore);

  return enhancer(rootReducer, initialState);
}
