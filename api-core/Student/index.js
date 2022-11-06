import Axios from "../Axios";

export const getStudentDetails = async () => {
  try {
    const response = await Axios.get(`/student`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
export const postStudentDocs = async (data) => {
  try {
    const response = await Axios.post(`/uploadDoc/`, data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
export const postStudentData = async (data) => {
  try {
    const response = await Axios.post(`/student`, data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
