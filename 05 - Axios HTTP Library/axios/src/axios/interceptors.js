import axios from "axios";

const authInterFetch = axios.create({
  // baseURL: "https://course-api.com/",
  baseURL: "/",
});

authInterFetch.interceptors.request.use(
  (request) => {
    request.headers["Accept"] = "application/json";
    console.log("request sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authInterFetch.interceptors.response.use(
  (response) => {
    console.log("got response");
    return response;
  },
  (error) => {
    console.log(error.response);
    return Promise.reject(error);
  }
);

export default authInterFetch;
