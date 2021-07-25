import axios from "axios";

export const register = async (userData) => {
  return await axios.post(`${process.env.REACT_APP_API}/register`, userData);
};

export const login = async (userData) => {
  return await axios.post(`${process.env.REACT_APP_API}/login`, userData);
};

export const updateUserInLocalStorage = (user, next) => {
  if (window.localStorage.getItem("auth")) {
    let auth = JSON.parse(localStorage.getItem("auth"));
    auth.user = user;
    localStorage.setItem("auth", JSON.stringify(auth));
    next();
  }
};
