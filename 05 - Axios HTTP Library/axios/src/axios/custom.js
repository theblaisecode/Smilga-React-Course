import axios from "axios";

const authCustomFetch = axios.create({
  // baseURL: "https://course-api.com/",
  baseURL: "/",
  headers: {
    Accept: "application/json",
  },
});

export default authCustomFetch;
