// To Set Cart Items in localStorage
export const SetCartItems = (newCartData) => {
  return localStorage.setItem("ManWellCart", JSON.stringify(newCartData)) || [];
};

// To Get Cart Items in localStorage
export const GetCartItems = () => {
  return JSON.parse(localStorage.getItem("ManWellCart")) || [];
};
