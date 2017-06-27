import { put, call } from "redux-saga/effects";
import fetch from "../utils/fetch";

function fetchPost(url) {
  return fetch(url).then((json) => json);
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
  try {
    yield put({ type: "TIME_PENDING", user: user });
    const user = yield call(fetchPost, "/postss");
    yield put({ type: "TIME_FULFILLED", payload: user });
  } catch (e) {
    yield put({ type: "TIME_REJECTED", message: e.message });
  }
}

export default fetchUser;
