import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actionType";

const initialState = {
  isAuth: false,
  isError: false,
  isLoading: false,
  token: "",
  name: "",
  email: "",
  mobile: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        name: payload.Name,
        email: payload.email,
        mobile: payload.mobile,
      };
    case LOGOUT:
      return { ...state, isLoading: false, isAuth: false, name: "", token: "" };
    default:
      return state;
  }
};
