import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "../actionTypes";

import axios from "axios";
import { Dispatch } from "redux";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
// const API_URL = "https://man-matters.onrender.com";

const productRequest = () => {
  return { type: GET_PRODUCT_REQUEST };
};

const productSuccess = (payload: any) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};

const productError = () => {
  return { type: GET_PRODUCT_ERROR };
};

export const getProducts = (dispatch: Dispatch, paramObj: any) => {
  dispatch(productRequest());
  return axios
    .get(`${API_URL}/product/products`, paramObj)
    .then((res) => {
      dispatch(productSuccess(res.data));
    })
    .catch((err: any) => {
      console.log("Getting Products Error:-", err);
      dispatch(productError());
    });
};
