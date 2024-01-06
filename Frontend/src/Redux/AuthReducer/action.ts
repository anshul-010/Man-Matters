import { AUTH_LOADING, AUTH_ERROR, AUTH_SUCCESS, LOGOUT } from "./reducer";

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
const USER_DETAILS_LS_KEY = "ManWellUser";

// LogIn
export const LogIn = async (dispatch: any, userData: any) => {
  dispatch(AUTH_LOADING());
  return axios({
    url: `${API_URL}/user/login`,
    method: "post",
    data: userData,
  })
    .then((res) => {
      console.log(res.data)
      if (res.data.msg === "wrong credential") {
        dispatch(AUTH_ERROR);
        return { auth: false};
      } else {
        const { Name, email, mobile, token } = res.data;
        const userData = {
          userName: Name,
          email: email,
          mobile: mobile,
          token: token,
        };
        SetItemLocalStorage(USER_DETAILS_LS_KEY, userData);
        dispatch(AUTH_SUCCESS(res.data));
        return { auth: true,admin:res.data.Name  };
      }
    })
    .catch((err: any) => {
      console.log("LogIn Error:-", err);
      dispatch(AUTH_ERROR());
    });
};

// LogOut
export const LogOut = (dispatch: any) => {
  DeleteLocalStorage(USER_DETAILS_LS_KEY);
  dispatch(LOGOUT());
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
  const userDetails = localStorage.getItem(USER_DETAILS_LS_KEY);
  if (userDetails) {
    return JSON.parse(userDetails);
  }
  return {
    token: "",
    userName: "",
    email: "",
    mobile: "",
  };
};
