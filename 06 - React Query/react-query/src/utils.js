import axios from "axios";

const customInstance = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
  headers: {
    Accept: "appliction/json",
  },
});

export default customInstance;
