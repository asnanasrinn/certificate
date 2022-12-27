import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";
import { LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./actionType";
import { PROFILE_FAIL, PROFILE_REQUEST, PROFILE_SUCCESS } from "./actionType";
    
// login

const initiailState = {
  loading: false,
  error: "",
  userDetails: [],
};


const LoginReducer = (state = initiailState, action) => {
switch (action.type) {
case LOGIN_REQUEST:
  return {
    ...state,
    loading: true,
  };

case LOGIN_SUCCESS:
  return {
    ...state,
    loding: false,
    userDetails: action.payload,
    error: "",
  };
case LOGIN_FAIL:
  return {
    ...state,
    loading: false,
    error: action.payload,
  };

  // profile

  case PROFILE_REQUEST:
  return {
    ...state,
    loading: false,
  };

case PROFILE_SUCCESS:
  return {
    ...state,
    loginDetails: action.payload,
  };
case PROFILE_FAIL:
  return {
    ...state,
    error: action.payload,
  };


// logout

case LOGOUT_REQUEST:
  return {
    ...state,
    loading: true,
  };

case LOGOUT_SUCCESS:
  return {
    ...state,
    loding: false,
    userDetails: action.payload,
    logoutDetails:"",
  };
case LOGOUT_FAIL:
  return {
    ...state,
    loading: false,
    error: action.payload,
  };

default:
  return state;
}
};
export default LoginReducer;


