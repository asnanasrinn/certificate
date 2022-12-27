import { CREATESTUDENT_COURSE_FAIL, CREATESTUDENT_COURSE_REQUEST, CREATESTUDENT_COURSE_SUCCESS } from "./actionType";
import { ALLSTUDENT_COURSE_FAIL, ALLSTUDENT_COURSE_REQUEST, ALLSTUDENT_COURSE_SUCCESS } from "./actionType";
import { DELETESTUDENT_COURSE_FAIL, DELETESTUDENT_COURSE_REQUEST, DELETESTUDENT_COURSE_SUCCESS } from "./actionType";


const initiailState = {
    loading: false,
    error: "",
    createStudentCourseDetails: {},
    allstudentCourseDetails: {},
    deleteStudentCourseDetails: {}
  };
  

// create student course 

const StudentCourseReducer = (state = initiailState, action) => {
    switch (action.type) {
case CREATESTUDENT_COURSE_REQUEST:
    return {
      ...state,
      loading: true,
    };
  
  case CREATESTUDENT_COURSE_SUCCESS:
    return {
      ...state,
      loding: false,
      createStudentCourseDetails: action.payload,
      error: "",
    };
  case CREATESTUDENT_COURSE_FAIL:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  

    // all students course 

    case ALLSTUDENT_COURSE_REQUEST:
    return {
      ...state,
      loading: true,
    };
  
  case ALLSTUDENT_COURSE_SUCCESS:
    return {
      ...state,
      loding: false,
      allstudentCourseDetails: action.payload,
      error: "",
    };
  case ALLSTUDENT_COURSE_FAIL:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };


    // delete student course 

    case DELETESTUDENT_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETESTUDENT_COURSE_SUCCESS:
      return {
        ...state,
        loding: false,
        deleteStudentCourseDetails: action.payload,
        error: "",
      };
    case DELETESTUDENT_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


  
    default:
      return state;
  }
  };
  export default StudentCourseReducer; 