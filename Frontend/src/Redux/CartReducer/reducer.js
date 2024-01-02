import {
  TOGGLECART,
  INPCHANGE,
  CHECKOUTLOADING,
  CHECKOUTERROR,
  CHECKOUTSUCCESS,
  HIDECHECKOUTPAYMENT,
} from "../actionType";

const init = {
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
    case CHECKOUTLOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        showOrderPlaced: false,
      };
    }
    case CHECKOUTERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case CHECKOUTSUCCESS: {
      return {
        ...state,
        isLoading: false,
        showOrderPlaced: true,
      };
    }
    case HIDECHECKOUTPAYMENT: {
      return {
        ...state,
        showOrderPlaced: false,
      };
    }

    default:
      return state;
  }
};
