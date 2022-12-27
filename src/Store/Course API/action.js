import { CREATE_COURSE_FAIL, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS } from "./actionType";
import { ALL_COURSE_FAIL, ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS } from "./actionType";
import { DELETE_COURSE_FAIL, DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS } from "./actionType";
import { SINGLEVIEW_COURSE_FAIL, SINGLEVIEW_COURSE_REQUEST, SINGLEVIEW_COURSE_SUCCESS } from "./actionType";
import { UPDATE_COURSE_FAIL, UPDATE_COURSE_REQUEST, UPDATE_COURSE_SUCCESS } from "./actionType";


// create course 

export const createCourseRequest = (input) =>
({
type: CREATE_COURSE_REQUEST,
payload: input,
});

export const createCourseSuccess = (createCourseDetails) => ({
type: CREATE_COURSE_SUCCESS,
payload: createCourseDetails,
});

export const createCourseFail = (error) => ({
type: CREATE_COURSE_FAIL,
payload: error,
});


// all course 

export const allCourseRequest = () =>
({
type: ALL_COURSE_REQUEST,
payload: "",
});

export const allCourseSuccess = (allCourseDetails) => ({
type: ALL_COURSE_SUCCESS,
payload: allCourseDetails,
});

export const allCourseFail = (error) => ({
type: ALL_COURSE_FAIL,
payload: error,
});


// delete course 

export const deleteCourseRequest = (id) =>
({ 
type: DELETE_COURSE_REQUEST,
payload: id,
});

export const deleteCourseSuccess = () => ({
type: DELETE_COURSE_SUCCESS,
payload: "",
});

export const deleteCourseFail = (error) => ({
type: DELETE_COURSE_FAIL,
payload: "error",
});


// single view course 

export const singleviewCourseRequest = (id) =>
({
type: SINGLEVIEW_COURSE_REQUEST,
payload: id,
});

export const singleviewCourseSuccess = (singleviewCourseDetails) => ({
type: SINGLEVIEW_COURSE_SUCCESS,
payload: singleviewCourseDetails,
});

export const singleviewCourseFail = (error) => ({
type: SINGLEVIEW_COURSE_FAIL,
payload: error,
});


// update course 

export const updateCourseRequest = (id) =>
({
type: UPDATE_COURSE_REQUEST,
payload: id,
});

export const updateCourseSuccess = (updateCourseDetails,id) => ({
type: UPDATE_COURSE_SUCCESS,
payload: updateCourseDetails,id
});

export const updateCourseFail = (error) => ({
type: UPDATE_COURSE_FAIL,
payload: error,
});
