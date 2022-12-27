import { CREATE_CATEGORY_FAIL, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS } from "./actionType";
import { ALLCOURSE_CATEGORY_FAIL, ALLCOURSE_CATEGORY_REQUEST, ALLCOURSE_CATEGORY_SUCCESS } from "./actionType";
import { DELETECOURSE_CATEGORY_FAIL, DELETECOURSE_CATEGORY_REQUEST, DELETECOURSE_CATEGORY_SUCCESS } from "./actionType";
import { SVCOURSE_CATEGORY_FAIL, SVCOURSE_CATEGORY_REQUEST, SVCOURSE_CATEGORY_SUCCESS } from "./actionType";
import { UPDATE_CATEGORY_FAIL, UPDATE_CATEGORY_REQUEST, UPDATE_CATEGORY_SUCCESS } from "./actionType";

// create course category 

export const createCategoryRequest = (input) =>
({
type: CREATE_CATEGORY_REQUEST,
payload: input,
});

export const createCategorySuccess = (createCourseCategoryDetails) => ({
type: CREATE_CATEGORY_SUCCESS,
payload: createCourseCategoryDetails,
});

export const createCategoryFail = (error) => ({
type: CREATE_CATEGORY_FAIL,
payload: error,
});


// all course category 

export const allCourseCategoryRequest = () =>
({
type: ALLCOURSE_CATEGORY_REQUEST,
payload: "",
});

export const allCourseCategorySuccess = (allCourseCategoryDetails) => ({
type: ALLCOURSE_CATEGORY_SUCCESS,
payload: allCourseCategoryDetails,
});

export const allCourseCategoryFail = (error) => ({
type: ALLCOURSE_CATEGORY_FAIL,
payload: error,
});


// delete course category 

export const deleteCourseCategoryRequest = (id) =>
({ 
type: DELETECOURSE_CATEGORY_REQUEST,
payload: id,
});

export const deleteCourseCategorySuccess = () => ({
type: DELETECOURSE_CATEGORY_SUCCESS,
payload: "",
});

export const deleteCourseCategoryFail = (error) => ({
type: DELETECOURSE_CATEGORY_FAIL,
payload: "error",
});


// single view course category 

export const svCourseCategoryRequest = (id) =>
({
type: SVCOURSE_CATEGORY_REQUEST,
payload: id,
});

export const svCourseCategorySuccess = (svCourseCategoryDetails) => ({
type: SVCOURSE_CATEGORY_SUCCESS,
payload: svCourseCategoryDetails,
});

export const svCourseCategoryFail = (error) => ({
type: SVCOURSE_CATEGORY_FAIL,
payload: error,
});


// update course category 

export const updateCategoryRequest = (id) =>
({
type: UPDATE_CATEGORY_REQUEST,
payload: id,
});

export const updateCategorySuccess = (updateCourseCategoryDetails,id) => ({
type: UPDATE_CATEGORY_SUCCESS,
payload: updateCourseCategoryDetails,id
});

export const updateCategoryFail = (error) => ({
type: UPDATE_CATEGORY_FAIL,
payload: error,
});
