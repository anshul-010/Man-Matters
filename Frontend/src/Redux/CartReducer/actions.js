import { TOGGLECART, MANWELLCART } from "../actionType";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
const CartLocalStorageKey = "ManWellCart";

// To Set Cart Items in localStorage
export const SetCartItems = (newCartData) => (dispatch) => {
  localStorage.setItem(MANWELLCART, JSON.stringify(newCartData));
  dispatch({ type: TOGGLECART });
};

// To Get Cart Items in localStorage
export const GetCartItems = () => {
  return JSON.parse(localStorage.getItem(MANWELLCART)) || [];
};

// This function calculates & returns 10% discount of the price passed as value.
export const CalculateDiscount = (price) => {
  const discount = price * 0.1;
  return parseFloat(price - discount.toFixed(2));
};

// This function takes an array as argument and returns itemTotal, discount, and subtotal
export const CalculateCartTotal = (cartItems) => {
  let itemTotal = 0;
  let itemDiscount = 0;
  let subTotal = 0;

  cartItems.forEach((item) => {
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
