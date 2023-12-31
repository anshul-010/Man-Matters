import { TOGGLECART } from "../actionType";

// To Set Cart Items in localStorage
export const SetCartItems = (newCartData) => (dispatch) => {
  localStorage.setItem("ManWellCart", JSON.stringify(newCartData));
  dispatch({ type: TOGGLECART });
};

// To Get Cart Items in localStorage
export const GetCartItems = () => {
  return JSON.parse(localStorage.getItem("ManWellCart")) || [];
};

// This function calculates & returns 10% discount of the price passed as value.
export const CalculateDiscount = (price) => {
  const discount = Math.round(price * 0.1);
  return price - discount;
};
