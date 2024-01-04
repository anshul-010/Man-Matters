import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { thunk } from "redux-thunk";

import AuthSlice from "./AuthReducer/reducer";
import CartSlice from "./CartReducer/reducer";
import ProductSlice from "./ProductReducer/reducer";

export const store = configureStore({
  reducer: {
    AuthReducer: AuthSlice,
    CartReducer: CartSlice,
    ProductReducer: ProductSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
