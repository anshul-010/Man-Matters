import {
  TOGGLECART,
  INPCHANGE,
  CARTLOADING,
  CARTERROR,
  CARTSUCCESS,
} from "../actionType";

const init = {
  isLoading: false,
  isError: false,
  toggleCart: false,
  name: "",
  address: "",
  pincode: "",
  city: "",
  state: "",
};

export const reducer = (state = init, { type, payload, name }) => {
  switch (type) {
    case TOGGLECART: {
      return {
        ...state,
        toggleCart: !state.toggleCart,
      };
    }
    case INPCHANGE: {
      return {
        ...state,
        [name]: payload,
      };
    }
    case CARTLOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case CARTERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case CARTSUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
