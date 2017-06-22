import { put, takeLatest } from "redux-saga/effects";
import fetch from "../utils/fetch";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
  try {
    yield put({ type: "TIME_PENDING", user: user });
    const user = yield fetch(`/posts`).then((json) => json);
    yield put({ type: "TIME_FULFILLED", payload: user });
  } catch (e) {
    yield put({ type: "TIME_REJECTED", message: e.message });
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest("DATA_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
