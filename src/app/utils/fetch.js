import axios from "axios";

function customFetch(data) {
  if (typeof data === "string") {
    return axios.get(__APIURL__ + data);
  } else {
    data.url = __APIURL__ + data.url;
    return axios(data);
  }
}

export default customFetch;
