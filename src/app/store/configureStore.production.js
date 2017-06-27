import { createStore, applyMiddleware, compose } from "redux";

import { routerMiddleware } from "redux-json-router";

import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducer";
import sagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();

function configureStore(history, initialState) {
  const middlewares = [routerMiddleware(history), sagaMiddleware];

  const enhancer = compose(applyMiddleware(...middlewares))(createStore);

  const store = enhancer(rootReducer, initialState);
  sagaMiddleware.run(sagas);
  return store;
}

export default configureStore;
