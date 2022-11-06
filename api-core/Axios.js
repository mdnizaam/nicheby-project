import axios from "axios";
import config from "../config";

const Axios = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    // Authorization: token?`Token ${token}`:`${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

Axios.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem("user"));
  console.log("token", token);
  config.headers.Authorization = token ? `Token ${token}` : "";
  return config;
});

export default Axios;
