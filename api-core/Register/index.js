import Axios from "../Axios";

export const createRegistration = async (data) => {
  try {
    const response = await Axios.post(`/register`, data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const otpVerify = async (data) => {
  try {
    const response = await Axios.post(`/verifyotp`, data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
