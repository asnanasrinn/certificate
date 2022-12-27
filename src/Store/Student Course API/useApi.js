import { axiosApi } from "../api_methods";
import {createStudentCourseFail,createStudentCourseRequest,createStudentCourseSuccess} from "./action"
import {allStudentCourseFail,allStudentCourseRequest,allStudentCourseSuccess} from "./action"
import {deleteStudentCourseFail,deleteStudentCourseRequest,deleteStudentCourseSuccess} from "./action"


// create student course 

export const createStudentCourseApi=(state,navigate) => {
    return async(dispatch) => {
        dispatch(createStudentCourseRequest(state))

        try{
            const res=await axiosApi.post( "/student/student_course/",state)
            console.log(res);
            dispatch(createStudentCourseSuccess(res?.data))
            navigate("/StudentCoursePage")
        }
        catch(error){
            console.log(error)
            dispatch(createStudentCourseFail(error?.res?.data))
        }
    }
}


// all student course 

export const allStudentCourseApi=(page) => {
    return async(dispatch) => {
        dispatch(allStudentCourseRequest());

        try{
            const res=await axiosApi.get( `/student/student_course/?page= ${page ? page : 1}`);
          if (res) {
            dispatch(allStudentCourseSuccess(res.data))
        }
        }catch(error){
            console.log(error)
            dispatch(allStudentCourseFail(error));
        }
    }
}


// delete student course 

export const deleteStudentCourseApi=(id,navigate,page) => {
    return async(dispatch) => {
        dispatch(deleteStudentCourseRequest(id));

        try{
            const res=await axiosApi.delete(`/student/student_course/${id}`);
          if (res) {
            dispatch(deleteStudentCourseSuccess(res?.data))
            navigate('/StudentCoursePage')
            try{
                const res2 = await axiosApi.get(`/student/student_course/?page=${page? page : 1}`)
                if (res2) {
                    dispatch(allStudentCourseSuccess(res2.data));
                }
            }catch (error) {
                console.log(error)
                dispatch(allStudentCourseFail(error));
            }
        }
        }catch(error){
            console.log(error)
            dispatch(deleteStudentCourseFail(error));
        }
    }
}
