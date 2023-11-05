import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`, { id: inputId });
};

const postVerifyBookAppointment = (data) =>{
  return axios.post('/api/verify-book-appointment', data)
};

export { handleLoginApi, getAllUsers, postVerifyBookAppointment };
