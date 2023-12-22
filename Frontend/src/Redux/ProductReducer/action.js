import axios from "axios"
import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../actionType"

const productRequest = ()=>{
    return {type : GET_PRODUCT_REQUEST}
}

const productSuccess = (payload)=>{
    return {type : GET_PRODUCT_SUCCESS,payload}
}

const productError = ()=>{
    return  {type : GET_PRODUCT_ERROR}
}

export const getProducts =(paramObj)=> (dispatch)=>{
    dispatch(productRequest())
    return (axios.get(`http://localhost:8080/product/products/`,paramObj)
    .then((res)=>{
        dispatch(productSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(productError(err))
    })
    )
}