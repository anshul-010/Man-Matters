import { AlertDescription } from "@chakra-ui/react";
import { LOGIN_FAILURE, LOGIN_NAME, LOGIN_REQUEST, LOGIN_SUCCESS,LOGOUT,REGISTER_REQUEST, REGISTER_SUCCESS } from "../actionType"
import axios from "axios";

const loginRequest=()=>{
    return {type : LOGIN_REQUEST}
  }

const loginSuccess=(payload)=>{
    return {type : LOGIN_SUCCESS,payload}

  }  
const loginName=(payload)=>{
    return {type : LOGIN_NAME,payload}
}  

const loginFailed =()=>{
    return {type : LOGIN_FAILURE}
}

const userLogout=()=>{
  return{type :LOGOUT}
}


export const login =(userData)=> (dispatch)=>{
    dispatch(loginRequest())
    return (axios.post(`http://localhost:8080/user/login`, userData)
    .then((res)=>{
    if(res.data.msg==="wrong credential"){
      return {auth:false}
    }
    else{
      dispatch(loginSuccess(res.data.token))
      dispatch(loginName(res.data.Name))
      return {auth:true}
    }
  })
  .catch((err)=>{
    dispatch(loginFailed())
    // return false
  }))
}

export const logout=()=>(dispatch)=>{
  dispatch(userLogout())
}
