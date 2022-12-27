import { CREATE_FAIL, CREATE_REQUEST, CREATE_SUCCESS } from "./actionType";
import { ALLSTUDENTS_FAIL, ALLSTUDENTS_REQUEST, ALLSTUDENTS_SUCCESS } from "./actionType";
import { SINGLE_VIEW_FAIL, SINGLE_VIEW_REQUEST, SINGLE_VIEW_SUCCESS } from "./actionType";
import { DELETE_STUDENT_FAIL, DELETE_STUDENT_REQUEST, DELETE_STUDENT_SUCCESS } from "./actionType";
import { UPDATE_FAIL, UPDATE_REQUEST, UPDATE_SUCCESS } from "./actionType";


const initiailState = {
  loading: false,
  error: "",
  userDetails: [],
  allstudents: [],
  singleViewDetails: {},
  deleteStudents: {},
  updateStudent: {},
  createStudentCourseDetails: {}
};

// create studnts

const StudentReducer = (state = initiailState, action) => {
switch (action.type) {
case CREATE_REQUEST:
  return {
    ...state,
    loading: true,
  };

case CREATE_SUCCESS:
  return {
    ...state,
    loding: false,
    createDetails: action.payload,
    error: "",
  };
case CREATE_FAIL:
  return {
    ...state,
    loading: false,
    error: action.payload,
  };

  // all students

  
  case ALLSTUDENTS_REQUEST:
    return {
      ...state,
      loading: true,
    };
  
  case ALLSTUDENTS_SUCCESS:
    return {
      ...state,
      loding: false,
      allStudentsDetails: action.payload,
      error: "",
    };
  case ALLSTUDENTS_FAIL:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };


// single view

case SINGLE_VIEW_REQUEST:
  return {
    ...state,
    loading: true,
  };

case SINGLE_VIEW_SUCCESS:
  return {
    ...state,
    loding: false,
    singleViewDetails: action.payload,
    error: "",
  };
case SINGLE_VIEW_FAIL:
  return {
    ...state,
    loading: false,
    error: action.payload,
  };


// delete student 
  
case DELETE_STUDENT_REQUEST:
  return {
    ...state,
    loading: true,
  };

case DELETE_STUDENT_SUCCESS:
  return {
    ...state,
    loding: false,
    deleteStudents: action.payload,
    error: "",
  };
case DELETE_STUDENT_FAIL:
  return {
    ...state,
    loading: false,
    error: action.payload,
  };


  // update student 

  case UPDATE_REQUEST:
  return {
    ...state,
    loading: true,
  };

case UPDATE_SUCCESS:
  return {
    ...state,
    loding: false,
    updateStudent: action.payload,
    error: "",
  };
case UPDATE_FAIL:
  return {
    ...state,
    loading: false,
    error: action.payload,
  };


  default:
    return state;
}
};
export default StudentReducer; 