import Axios from "../Axios";

export const createRegistration = async (data) => {
  try {
    const response = await Axios.post(`/register`, data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
