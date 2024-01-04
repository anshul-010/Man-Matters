import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface initialStateTypes {
  isLoading: boolean;
  isError: boolean;
  products: any;
  totalCount: number | string;
}

const initialState: initialStateTypes = {
  isLoading: false,
  isError: false,
  products: [],
  totalCount: 0,
};

const ProductSlice = createSlice({
  name: "ProductReducer",
  initialState,
  reducers: {
    PRODUCT_LOADING: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    PRODUCT_ERROR: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    PRODUCT_SUCCESS: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.products = action.payload.results;
      state.totalCount = action.payload.totalCount;
    },
  },
});

export const { PRODUCT_LOADING, PRODUCT_ERROR, PRODUCT_SUCCESS } =
  ProductSlice.actions;

export default ProductSlice.reducer;
