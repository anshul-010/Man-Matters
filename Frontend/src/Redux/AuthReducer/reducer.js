import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_NAME, LOGOUT } from "../actionType"


const initialState = {
    isAuth:false,
    isError: false,
    isLoading:false,
    token:"",
    name:""
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true }
        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true }
        case LOGIN_SUCCESS :
            return {...state,isLoading:false,isAuth: true,token : payload}
        case LOGIN_NAME:
            return {...state,isLoading:false,isAuth: true,name : payload}
        case LOGOUT:
            return {...state,isLoading:false,isAuth: false,name : "",token:""}
        default :
           return state
        }
}
