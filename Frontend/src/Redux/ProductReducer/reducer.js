import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  TOGGLECART,
} from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  totalCount: 0,
  toggleCart: false,
};

export const reducer = (state = initialState, { type, payload }) => {
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
    case TOGGLECART: {
      return {
        ...state,
        toggleCart: !state.toggleCart,
      };
    }
    default:
      return state;
  }
};
