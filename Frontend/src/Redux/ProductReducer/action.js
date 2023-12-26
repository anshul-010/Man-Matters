import axios from "axios";
import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  TOGGLECART,
} from "../actionType";

const productRequest = () => {
  return { type: GET_PRODUCT_REQUEST };
};

const productSuccess = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};

const productError = () => {
  return { type: GET_PRODUCT_ERROR };
};

export const ToggleCart = () => {
  return { type: TOGGLECART };
};

export const getProducts = (paramObj) => (dispatch) => {
  dispatch(productRequest());
  return axios
    .get(`http://localhost:8080/product/products/`, paramObj)
    .then((res) => {
      dispatch(productSuccess(res.data));
    })
    .catch((err) => {
      dispatch(productError(err));
    });
};
