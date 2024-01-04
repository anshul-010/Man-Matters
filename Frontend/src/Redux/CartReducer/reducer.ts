import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface initialStateTypes {
  isLoading: boolean;
  isError: boolean;
  toggleCart: boolean;
  showOrderPlaced: boolean;
  name: string;
  address: string;
  pincode: string | number;
  city: string;
  state: string;
}

const initialState: initialStateTypes = {
  isLoading: false,
  isError: false,
  toggleCart: false,
  showOrderPlaced: false,
  name: "",
  address: "",
  pincode: "",
  city: "",
  state: "",
};

const CartSlice = createSlice({
  name: "CartReducer",
  initialState,
  reducers: {
    CHECKOUT_LOADING: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.showOrderPlaced = false;
    },
    CHECKOUT_ERROR: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    CHECKOUT_SUCCESS: (state) => {
      state.isLoading = false;
      state.showOrderPlaced = true;
    },
    TOGGLE_CART: (state) => {
      state.toggleCart = !state.toggleCart;
    },
    HIDE_PAYMENT_SUCCESS_COMP: (state) => {
      state.showOrderPlaced = false;
    },
    NAME_INP_CHANGE: (state, action: PayloadAction<any>) => {
      state.name = action.payload;
    },
    ADDRESS_INP_CHANGE: (state, action: PayloadAction<any>) => {
      state.address = action.payload;
    },
    PINCODE_INP_CHANGE: (state, action: PayloadAction<any>) => {
      state.pincode = action.payload;
    },
    CITY_INP_CHANGE: (state, action: PayloadAction<any>) => {
      state.city = action.payload;
    },
    STATE_INP_CHANGE: (state, action: PayloadAction<any>) => {
      state.state = action.payload;
    },
  },
});

export const {
  CHECKOUT_LOADING,
  CHECKOUT_ERROR,
  CHECKOUT_SUCCESS,
  TOGGLE_CART,
  HIDE_PAYMENT_SUCCESS_COMP,
  NAME_INP_CHANGE,
  ADDRESS_INP_CHANGE,
  PINCODE_INP_CHANGE,
  CITY_INP_CHANGE,
  STATE_INP_CHANGE,
} = CartSlice.actions;

export default CartSlice.reducer;
