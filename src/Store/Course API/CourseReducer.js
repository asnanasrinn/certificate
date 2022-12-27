import { CREATE_COURSE_FAIL,CREATE_COURSE_REQUEST,CREATE_COURSE_SUCCESS,} from "./actionType";
import {ALL_COURSE_FAIL,ALL_COURSE_REQUEST,ALL_COURSE_SUCCESS,} from "./actionType";
import {DELETE_COURSE_FAIL,DELETE_COURSE_REQUEST,DELETE_COURSE_SUCCESS,} from "./actionType";
import {SINGLEVIEW_COURSE_FAIL,SINGLEVIEW_COURSE_REQUEST,SINGLEVIEW_COURSE_SUCCESS,} from "./actionType";
import { UPDATE_COURSE_FAIL,UPDATE_COURSE_REQUEST,UPDATE_COURSE_SUCCESS,} from "./actionType";


const initiailState = {
  loading: false,
  error: "",
  createCourseDetails: [],
  allCourseDetails: [],
  deleteCourseDetails: {},
  singleviewCourseDetails: {},
  updateCourseDetails: {},
};

// create course

const CourseReducer = (state = initiailState, action) => {
  switch (action.type) {
    case CREATE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_COURSE_SUCCESS:
      return {
        ...state,
        loding: false,
        createCourseDetails: action.payload,
        error: "",
      };
    case CREATE_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // all course

    case ALL_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ALL_COURSE_SUCCESS:
      return {
        ...state,
        loding: false,
        allCourseDetails: action.payload,
        error: "",
      };
    case ALL_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // delete course

    case DELETE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_COURSE_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteCourseDetails: action.payload,
        error: "",
      };
    case DELETE_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


      // single view 

      
    case SINGLEVIEW_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    
    case SINGLEVIEW_COURSE_SUCCESS:
      return {
        ...state,
        loding: false,
        singleviewCourseDetails: action.payload,
        error: "",
      };
    case SINGLEVIEW_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    

      // update course 

case UPDATE_COURSE_REQUEST:
  return {
    ...state,
    loading: true,
  };

case UPDATE_COURSE_SUCCESS:
  return {
    ...state,
    loding: false,
    updateCourseDetails: action.payload,
    error: "",
  };
case UPDATE_COURSE_FAIL:
  return {
    ...state,
    loading: false,
    error: action.payload,
  };


    default:
      return state;
  }
};

export default CourseReducer;
