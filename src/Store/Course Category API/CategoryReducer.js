import { CREATE_CATEGORY_FAIL, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS } from "./actionType";
import { ALLCOURSE_CATEGORY_FAIL, ALLCOURSE_CATEGORY_REQUEST, ALLCOURSE_CATEGORY_SUCCESS } from "./actionType";
import { DELETECOURSE_CATEGORY_FAIL, DELETECOURSE_CATEGORY_REQUEST, DELETECOURSE_CATEGORY_SUCCESS } from "./actionType";
import { SVCOURSE_CATEGORY_FAIL, SVCOURSE_CATEGORY_REQUEST, SVCOURSE_CATEGORY_SUCCESS } from "./actionType";
import { UPDATE_CATEGORY_FAIL, UPDATE_CATEGORY_REQUEST, UPDATE_CATEGORY_SUCCESS } from  "./actionType";


const initiailState = {
    loading: false,
    error: "",
    createCourseCategoryDetails: [],
    allCourseCategoryDetails: [],
    deleteCourseCategory: [],
    svCourseCategoryDetails: {},
    updateCourseCategoryDetails: {},
}

// create category 

const CategoryReducer = (state = initiailState, action) => {
    switch (action.type) {
    case CREATE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    
    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loding: false,
        createCourseCategoryDetails: action.payload,
        error: "",
      };
    case CREATE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


//  all course category 
 
case ALLCOURSE_CATEGORY_REQUEST:
    return {
      ...state,
      loading: true,
    };
  
  case ALLCOURSE_CATEGORY_SUCCESS:
    return {
      ...state,
      loding: false,
      allCourseCategoryDetails: action.payload,
      error: "",
    };
  case ALLCOURSE_CATEGORY_FAIL:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };


    // single view course category 

    case SVCOURSE_CATEGORY_REQUEST:
  return {
    ...state,
    loading: true,
  };

case SVCOURSE_CATEGORY_SUCCESS:
  return {
    ...state,
    loding: false,
    svCourseCategoryDetails: action.payload,
    error: "",
  };
case SVCOURSE_CATEGORY_FAIL:
  return {
    ...state,
    loading: false,
    error: action.payload,
  };


    // delete course category 

case DELETECOURSE_CATEGORY_REQUEST:
  return {
    ...state,
    loading: true,
  };

case DELETECOURSE_CATEGORY_SUCCESS:
  return {
    ...state,
    loding: false,
    deleteCourseCategory: action.payload,
    error: "",
  };
case DELETECOURSE_CATEGORY_FAIL:
  return {
    ...state,
    loading: false,
    error: action.payload,
  };

  // update course category 

  
  case UPDATE_CATEGORY_REQUEST:
  return {
    ...state,
    loading: true,
  };

case UPDATE_CATEGORY_SUCCESS:
  return {
    ...state,
    loding: false,
    updateCourseCategoryDetails: action.payload,
    error: "",
  };
case UPDATE_CATEGORY_FAIL:
  return {
    ...state,
    loading: false,
    error: action.payload,
  };


      default:
        return state;
    }}

    export default CategoryReducer; 

