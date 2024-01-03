import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actionTypes";

const initialState = {
  toggleNavbar: false,
  isAuth: false,
  isError: false,
  isLoading: false,
  token: "",
  name: "",
  email: "",
  mobile: "",
};

export const reducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        toggleNavbar: !state.toggleNavbar,
        isAuth: true,
        token: payload.token,
        name: payload.Name,
        email: payload.email,
        mobile: payload.mobile,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        toggleNavbar: !state.toggleNavbar,
        isLoading: false,
        isAuth: false,
        name: "",
        token: "",
      };
    }
    default: {
      return state;
    }
  }
};
