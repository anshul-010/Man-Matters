import { TOGGLECART } from "../actionType";

const init = {
  toggleCart: false,
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
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
