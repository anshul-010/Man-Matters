import { TOGGLECART, INPCHANGE } from "../actionType";

const init = {
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
    default:
      return state;
  }
};
