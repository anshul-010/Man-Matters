import { AlertDescription } from "@chakra-ui/react";
import {
  LOGIN_FAILURE,
  LOGIN_NAME,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  MANWELLTOKEN,
  MANWELLUSERNAME,
} from "../actionType";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
// const API_URL = "https://man-matters.onrender.com";

const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};

const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

const loginFailed = () => {
  return { type: LOGIN_FAILURE };
};

const userLogout = () => {
  return { type: LOGOUT };
};

// This function takes a key name and item and saves it in local storage
export const SetItemLocalStorage = (keyName, item) => {
  return localStorage.setItem(keyName, JSON.stringify(item));
};

// This function takes a key name and removes it from local storage
export const DeleteLocalStorage = (keyName) => {
  return localStorage.removeItem(keyName);
};

// This function is for getting User Name from local storage
export const GetUserName = () => {
  return JSON.parse(localStorage.getItem(MANWELLUSERNAME)) || "";
};

// This function is for getting Token from local storage
export const GetToken = () => {
  return JSON.parse(localStorage.getItem(MANWELLTOKEN)) || "";
};

export const login = (userData) => (dispatch) => {
  dispatch(loginRequest());
  return axios
    .post(`${API_URL}/user/login`, userData)
    .then((res) => {
      if (res.data.msg === "wrong credential") {
        return { auth: false };
      } else {
        // console.log(res.data);
        SetItemLocalStorage(MANWELLTOKEN, res.data.token);
        SetItemLocalStorage(MANWELLUSERNAME, res.data.Name);
        dispatch(loginSuccess(res.data));
        return { auth: true };
      }
    })
    .catch((err) => {
      dispatch(loginFailed());
      // return false
    });
};

export const logout = () => (dispatch) => {
  DeleteLocalStorage(MANWELLTOKEN);
  DeleteLocalStorage(MANWELLUSERNAME);
  dispatch(userLogout());
};
