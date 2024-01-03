import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  totalCount: 0,
};

export const reducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case GET_PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload.results,
        totalCount: payload.totalCount,
      };
    }
    case GET_PRODUCT_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};
