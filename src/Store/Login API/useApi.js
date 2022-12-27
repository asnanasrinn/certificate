import { loginFail, loginRequest, loginSuccess } from "./action";
import { logoutFail, logoutRequest, logoutSuccess } from "./action";
import { profileFail, profileRequest, profileSuccess } from "./action";
import { axiosApi } from "../api_methods";
import axios from "axios";
// import { Navigate } from "react-router-dom";

// login

export const loginApi = (input,navigate) => { 
return async (dispatch) => {

dispatch(loginRequest(input));
  
try {
 const res = await axiosApi.post(`http://api.certificates.edisonvalley.com/api/v1/account/login/`,input);
 console.log(res);
 sessionStorage.setItem("token", res?.data.token);

 if (res?.data?.token) {
   dispatch(loginSuccess(res));
   navigate("/dashboard")
 }

} catch (error) {
  dispatch(loginFail(error?.response?.data));
}
};
};

// logout


export const logoutApi = (navigate) => { 
  return async (dispatch) => {
  
  dispatch(logoutRequest());
  
  try {
    const token = sessionStorage.getItem("token")
   const res = await axiosApi.post(`/account/logout/`,token);
   console.log(res);
  
   if (res) {
     dispatch(logoutSuccess(res.data));
     sessionStorage.clear("token")
     navigate("/")
   }
  
  } catch (error) {
    console.log(error);
    dispatch(logoutFail(error));
  }
  };
  };

  // profile

  export const profileApi = () => { 
    return async (dispatch) => {
    
    dispatch(profileRequest());
    
    try {
     const res = await axiosApi.get(`/account/profile`);
     console.log(res);
    
     if (res) {
       dispatch(profileSuccess(res.data));
     }
    
    } catch (error) {
      console.log(error);
      dispatch(profileFail(error?.response?.data));
    }
    };
    };