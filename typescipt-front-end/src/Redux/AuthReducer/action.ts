import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  MANWELLUSER,
} from "../actionTypes";

import { Dispatch } from "redux";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
// const API_URL = "https://man-matters.onrender.com";

const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};

const loginSuccess = (payload: any) => {
  return { type: LOGIN_SUCCESS, payload };
};

const loginFailed = () => {
  return { type: LOGIN_FAILURE };
};

const userLogout = () => {
  return { type: LOGOUT };
};

// This function takes a key name and item and saves it in local storage
export const SetItemLocalStorage = (keyName: string, item: any) => {
  return localStorage.setItem(keyName, JSON.stringify(item));
};

// This function takes a key name and removes it from local storage
export const DeleteLocalStorage = (keyName: string) => {
  return localStorage.removeItem(keyName);
};

// This function is for getting User details from local storage
export const GetUserDetails = () => {
  const userDetails = localStorage.getItem(MANWELLUSER);
  if (userDetails) {
    return JSON.parse(userDetails);
  }
  return null;
};

export const login = (dispatch: Dispatch, userData: any) => {
  dispatch(loginRequest());
  return axios
    .post(`${API_URL}/user/login`, userData)
    .then((res) => {
      if (res.data.msg === "wrong credential") {
        return { auth: false };
      } else {
        const { Name, email, mobile, token } = res.data;
        const userData = {
          userName: Name,
          email: email,
          mobile: mobile,
          token: token,
        };
        SetItemLocalStorage(MANWELLUSER, userData);
        dispatch(loginSuccess(res.data));
        return { auth: true };
      }
    })
    .catch((err: any) => {
      console.log("LogIn Error:-", err);
      dispatch(loginFailed());
    });
};

export const logout = (dispatch: Dispatch) => {
  DeleteLocalStorage(MANWELLUSER);
  dispatch(userLogout());
};
