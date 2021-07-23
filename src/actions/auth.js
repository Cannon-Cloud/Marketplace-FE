import axios from "axios";

export const register = async (userData) => {
  return await axios.post(`${process.env.REACT_APP_API}/register`, userData);
};

export const login = async (userData) => {
  return await axios.post(`${process.env.REACT_APP_API}/login`, userData);
};
