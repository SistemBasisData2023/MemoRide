import axios from 'axios';
import Cookies from 'js-cookie';
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
      console.log(response.data);
      const token = response.data.token; // Access the token property from the response
      const userData = response.data.data; // Access user data from the response
      setUser(userData);

      // Save the token as a cookie named 'accessToken'
      Cookies.set('accessToken', token, { expires: 150 });

      return userData;
    })
    .catch((error) => {
      // Handle login failure
      throw error;
    });
};

// Get token when Login
export const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
};

// Register action
export const register = (setUser, registerData) => {
  return axios
    .post(`${BASE_URL}/auth/register`, registerData)
    .then((response) => {
      // Handle successful registration
      console.log(response.data);
      const userData = response.data.data; // Access user data from the response
      setUser(userData);
      return userData;
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
