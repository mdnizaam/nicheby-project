import Axios from "../Axios";

export const postLogin = async (data) => {
  try {
    const response = await Axios.post(`/login`, data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
