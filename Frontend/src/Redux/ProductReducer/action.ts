import { PRODUCT_LOADING, PRODUCT_ERROR, PRODUCT_SUCCESS, PRODUCT_PATCH, PRODUCT_DELETE } from "./reducer";

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export const GetProducts = async (dispatch: any, toast: any, paramObj: any) => {
  toast.closeAll();
  dispatch(PRODUCT_LOADING());
  return axios
    .get(`${API_URL}/product/products`, paramObj)
    .then((res) => {
      dispatch(PRODUCT_SUCCESS(res.data));
    })
    .catch((err: any) => {
      console.log("Getting Products Error:-", err);
      toast({
        title: "Something Went Wrong!",
        description: "This seems to be a server error, Please try again!",
        status: "error",
        position: "top",
      });
      dispatch(PRODUCT_ERROR());
    });
};

export const patchProduct = (dispatch:any,id:any,Data:any)=>{
  return (
    axios.patch(`http://localhost:8080/product//update/${id}`, Data)
    .then(()=>{
      dispatch(PRODUCT_PATCH())
    })
    .catch((err)=>{
      console.error(err.message)
    })

  )
}

export const deleteProduct = (dispatch:any, id:any)=>{
  return(
    axios.delete(`http://localhost:8080/product/delete/${id}`)
    .then((res:any)=>{
      dispatch(PRODUCT_DELETE())
      if(res.data.msg==="item has been deleted"){
        return {status:true}
      }
      else{
        return {status:true}
      }
    })
    .catch((err)=>{
      console.log(err.message)
    })
  )
}
