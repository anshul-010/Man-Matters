import { DeleteLocalStorage, GetUserDetails } from "../AuthReducer/action";
import {
  TOGGLECART,
  MANWELLCART,
  CHECKOUTLOADING,
  CHECKOUTERROR,
  CHECKOUTSUCCESS,
} from "../actionTypes";

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

// Function for making payment checkout request to backend
export const DoPayment = (
  dispatch: any,
  toast: any,
  isLoading: boolean,
  data: any
) => {
  toast.closeAll();
  dispatch({ type: CHECKOUTLOADING });
  if (!isLoading) {
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
        // console.log(res.data);
        dispatch({ type: CHECKOUTSUCCESS });
        DeleteLocalStorage(MANWELLCART);
      })
      .catch((err) => {
        console.log("Checkout Payment Error:-", err);
        dispatch({ type: CHECKOUTERROR });
      });
  }
};

// To Set Cart Items in localStorage
export const SetCartItems = (dispatch: any, newCartData: any) => {
  localStorage.setItem(MANWELLCART, JSON.stringify(newCartData));
  dispatch({ type: TOGGLECART });
};

// To Get Cart Items in localStorage
export const GetCartItems = (dispatch: any) => {
  const cartItems = localStorage.getItem(MANWELLCART);
  dispatch({ type: TOGGLECART });
  if (cartItems) {
    return JSON.parse(cartItems);
  }
  return null;
};

// This function calculates & returns 10% discount of the price passed as value.
export const CalculateDiscount = (price: number) => {
  const discount = price * 0.1;
  const discountedPrice = price - discount;
  return parseFloat(discountedPrice.toFixed(2));
};

// This function takes an array as argument and returns itemTotal, discount, and subtotal
export const CalculateCartTotal = (cartItems: any) => {
  let itemTotal = 0;
  let itemDiscount = 0;
  let subTotal = 0;

  cartItems.forEach((item: any) => {
    const totalForItem = item.price * item.itemQty;
    itemTotal += totalForItem;
    const discountForItem = totalForItem * 0.1; // 10% discount
    itemDiscount += discountForItem;
  });
  itemDiscount = parseFloat(itemDiscount.toFixed(2));
  subTotal = itemTotal - itemDiscount;
  return {
    itemTotal,
    itemDiscount,
    subTotal,
  };
};
