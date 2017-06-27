import { takeLatest } from "redux-saga/effects/";
import dataFetch from "./dataFetch";

// use them in parallel
export default function* rootSaga() {
  yield takeLatest("DATA_FETCH_REQUESTED", dataFetch);
}
