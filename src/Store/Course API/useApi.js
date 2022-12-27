import { axiosApi } from "../api_methods";
import {createCourseFail,createCourseRequest,createCourseSuccess} from "./action"
import {allCourseFail,allCourseRequest,allCourseSuccess} from "./action"
import {deleteCourseFail,deleteCourseRequest,deleteCourseSuccess} from "./action"
import {singleviewCourseFail,singleviewCourseRequest,singleviewCourseSuccess} from "./action"
import {updateCourseFail,updateCourseRequest,updateCourseSuccess} from "./action"


// create course 

export const createCourseApi=(state,navigate) => {
    return async(dispatch) => {
        dispatch(createCourseRequest(state))

        try{
            const res=await axiosApi.post(  `/course/course/`,state)
            console.log(res);
            dispatch(createCourseSuccess(res?.data))
            navigate("/Courses")
        }
        catch(error){
            console.log(error)
            dispatch(createCourseFail(error?.res?.data))
        }
    }
}

// all course 

export const allCourseApi=(page) => {
    return async(dispatch) => {
        dispatch(allCourseRequest());

        try{
            const res=await axiosApi.get(`/course/course/?page= ${page ? page : 1}`);
          if (res) {
            dispatch(allCourseSuccess(res.data))
        }
        }catch(error){
            console.log(error)
            dispatch(allCourseFail(error));
        }
    }
}


// delete course 

export const deleteCourseApi=(id,navigate,page) => {
    return async(dispatch) => {
        dispatch(deleteCourseRequest(id));

        try{
            const res=await axiosApi.delete(`/course/course/${id}`);
          if (res) {
            dispatch(deleteCourseSuccess(res?.data))
            navigate('/Courses')
            try{
                const res2 = await axiosApi.get(`/course/course/?page=${page? page : 1}`)
                if (res2) {
                    dispatch(allCourseSuccess(res2.data));
                }
            }catch (error) {
                console.log(error)
                dispatch(allCourseFail(error));
            }
        }
        }catch(error){
            console.log(error)
            dispatch(deleteCourseFail(error));
        }
    }
}


// single view course 

export const singleviewCourseApi=(id) => {
    return async(dispatch) => {
        dispatch(singleviewCourseRequest(id));
                                                                       
        try{
            const res=await axiosApi.get(`/course/course/${id}`);
          if (res) {
            dispatch(singleviewCourseSuccess(res?.data))
        }
        }catch(error){
            console.log(error)
            dispatch(singleviewCourseFail(error));
        }
    }
}


// update course 


export const updateCourseApi=(id,state,navigate) => {
    return async(dispatch) => {
        dispatch(updateCourseRequest(id))

        try{
            const res=await axiosApi.put( `/course/course/${id}/`,state)
            if (res){
            dispatch(updateCourseSuccess(res?.data))
            navigate(`/Courses`);
        }
    }catch(error){
            console.log(error)
            dispatch(updateCourseFail(error))
        }
    }
}

