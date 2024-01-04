import { DeleteLocalStorage, GetUserDetails } from "../AuthReducer/action";
import {
  CHECKOUT_LOADING,
  CHECKOUT_ERROR,
  CHECKOUT_SUCCESS,
  TOGGLE_CART,
} from "./reducer";

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
const CART_LS_KEY = "ManWellCart";

// Function for making payment checkout request to backend
export const DoPayment = (dispatch: any, toast: any, data: any) => {
  toast.closeAll();
  dispatch(CHECKOUT_LOADING());
  axios({
    url: `${API_URL}/product/checkout_payment`,
    method: "post",
    headers: {
      Authorization: GetUserDetails().token || "",
      "Content-Type": "application/json",
    },
    data,
  })
    .then(() => {
      toast({
        title: "Transaction Successfull 👍",
        status: "success",
        position: "top",
      });
      dispatch(CHECKOUT_SUCCESS());
      DeleteLocalStorage(CART_LS_KEY);
    })
    .catch((err) => {
      console.log("Checkout Payment Error:-", err);
      toast({
        title: "Something Went Wrong!",
        description: "This seems to be a server error, Please try again!",
        status: "error",
        position: "top",
      });
      dispatch(CHECKOUT_ERROR());
    });
};

// To Set Cart Items in localStorage
export const SetCartItems = (dispatch: any, newCartData: any) => {
  localStorage.setItem(CART_LS_KEY, JSON.stringify(newCartData));
  dispatch(TOGGLE_CART());
};

// To Get Cart Items in localStorage
export const GetCartItems = () => {
  const cartItems = localStorage.getItem(CART_LS_KEY);
  if (cartItems) {
    return JSON.parse(cartItems);
  }
  return [];
};

// This function calculates & returns 10% discount of the price passed as value.
export const CalculateDiscount = (price: number) => {
  const discount = price * 0.1;
  const discountedPrice = price - discount;
  return parseFloat(discountedPrice.toFixed(2));
};

// This function takes an array as argument and returns itemTotal, discount, and subtotal
export const CalculateCartTotal = (cartItemsArr: any) => {
  let itemTotal = 0;
  let itemDiscount = 0;
  let subTotal = 0;

  if (cartItemsArr.length != 0) {
    cartItemsArr.forEach((item: any) => {
      const totalForItem = item.price * item.itemQty;
      itemTotal += totalForItem;
      const discountForItem = totalForItem * 0.1; // 10% discount
      itemDiscount += discountForItem;
    });
    itemDiscount = parseFloat(itemDiscount.toFixed(2));
    subTotal = itemTotal - itemDiscount;
  }

  return {
    itemTotal,
    itemDiscount,
    subTotal,
  };
};
