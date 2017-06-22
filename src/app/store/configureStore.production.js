import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer";
import sagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(applyMiddleware(sagaMiddleware))(createStore);

const store = function configureStore(initialState) {
  const st = enhancer(rootReducer, initialState);
  sagaMiddleware.run(sagas);
  return st;
};

export default store;
