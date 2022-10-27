import axios from "axios";
import config from "../config";

const token =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : null;
console.log("token", token);
const Axios = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    Authorization: token?`Token ${token}`:`${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default Axios;
