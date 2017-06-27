import { combineReducers } from "redux";

import counterReducer from "./features/Counter/reducer.js";
import homeReducer from "./features/Home/reducer.js";
import { routerReducer } from "redux-json-router";

export default combineReducers({
  counterReducer,
  home: homeReducer,
  router: routerReducer
});
