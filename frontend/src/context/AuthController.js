import axios from 'axios';
import { BASE_URL } from '../utils/config';

// Action types
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGOUT = 'LOGOUT';

// Login action
export const login = (setUser, loginData) => {
  return axios
    .post(`${BASE_URL}/auth/login`, loginData)
    .then((response) => {
      // Handle successful login
      console.log(response.data.user);
      setUser(response.data.user);
    })
    .catch((error) => {
      // Handle login failure
      throw error;
    });
};

// Register action
export const register = (setUser, registerData) => {
  return axios
    .post(`${BASE_URL}/auth/register`, registerData)
    .then((response) => {
      // Handle successful registration
      setUser(response.data.user);
      return response.data.user;
    })
    .catch((error) => {
      // Handle registration failure
      throw error;
    });
};


// Logout action
export const logout = (dispatch) => {
  if (typeof dispatch === "function") {
    // Handle logout
    dispatch({ type: LOGOUT });
    // You can also clear the authentication token or perform other necessary operations here
  }
};
