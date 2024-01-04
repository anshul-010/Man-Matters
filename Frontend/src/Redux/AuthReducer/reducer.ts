import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface initialStateTypes {
  toggleNavbar: boolean;
  isAuth: boolean;
  isError: boolean;
  isLoading: boolean;
  token: string;
  name: string;
  email: string;
  mobile: string | number;
}

const initialState: initialStateTypes = {
  toggleNavbar: false,
  isAuth: false,
  isError: false,
  isLoading: false,
  token: "",
  name: "",
  email: "",
  mobile: "",
};

const AuthSlice = createSlice({
  name: "AuthReducer",
  initialState,
  reducers: {
    AUTH_LOADING: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    AUTH_ERROR: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    AUTH_SUCCESS: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.toggleNavbar = !state.toggleNavbar;
      state.isAuth = true;
      state.token = action.payload.token;
      state.name = action.payload.Name;
      state.email = action.payload.email;
      state.mobile = action.payload.mobile;
    },
    LOGOUT: (state) => {
      state.toggleNavbar = !state.toggleNavbar;
      state.isLoading = false;
      state.isAuth = false;
      state.name = "";
      state.token = "";
    },
  },
});

export const { AUTH_LOADING, AUTH_ERROR, AUTH_SUCCESS, LOGOUT } =
  AuthSlice.actions;

export default AuthSlice.reducer;
