import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import { routerReducer, routerMiddleware } from "redux-json-router";

function visibilityFilter(state = {}) {
  return state;
}

// add routerReducer to your root reducer
const makeRootReducer = () =>
  combineReducers({
    visibilityFilter,
    router: routerReducer
  });

function configureStore(history, initialState = {}) {
  // add `routerMiddleware` to your middlewares, passing it the history singleton from the app's entry point
  const middlewares = [routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  var aa = createStore(makeRootReducer(), initialState, compose(...enhancers));
  return aa;
}

export { configureStore };
