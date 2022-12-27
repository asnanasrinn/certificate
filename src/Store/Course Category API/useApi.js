import { axiosApi } from "../api_methods";
import {createCategoryFail,createCategoryRequest,createCategorySuccess} from "./action"
import {allCourseCategoryFail,allCourseCategoryRequest,allCourseCategorySuccess} from "./action"
import {deleteCourseCategoryFail,deleteCourseCategoryRequest,deleteCourseCategorySuccess} from "./action"    
import {svCourseCategoryFail,svCourseCategoryRequest,svCourseCategorySuccess} from "./action"
import {updateCategoryFail,updateCategoryRequest,updateCategorySuccess} from "./action" 

// create course category 

export const createCategoryApi=(state,navigate) => {
    return async(dispatch) => {
        dispatch(createCategoryRequest(state))

        try{
            const res=await axiosApi.post(  `/course/course_category/`,state)
            console.log(res);
            dispatch(createCategorySuccess(res?.data))
            navigate("/Coursectgry")
        }
        catch(error){
            console.log(error)
            dispatch(createCategoryFail(error?.res?.data))
        }
    }
}

// all course category 

export const allCourseCategoryApi=(page) => {
    return async(dispatch) => {
        dispatch(allCourseCategoryRequest());

        try{
            const res=await axiosApi.get(  `/course/course_category/?page= ${page ? page : 1}`);
          if (res) {
            dispatch(allCourseCategorySuccess(res.data))
        }
        }catch(error){
            console.log(error)
            dispatch(allCourseCategoryFail(error));
        }
    }
}


// delete course category 


export const deleteCourseCategoryApi=(id,navigate,page) => {
    return async(dispatch) => {
        dispatch(deleteCourseCategoryRequest(id));

        try{
            const res=await axiosApi.delete(`/course/course_category/${id}`);
          if (res) {
            dispatch(deleteCourseCategorySuccess(res?.data))
            navigate('/Coursectgry')
            try{
                const res2 = await axiosApi.get(`/course/course_category/?page=${page? page : 1}`)
                if (res2) {
                    dispatch(allCourseCategorySuccess(res2.data));
                }
            }catch (error) {
                console.log(error)
                dispatch(allCourseCategoryFail(error));
            }
        }
        }catch(error){
            console.log(error)
            dispatch(deleteCourseCategoryFail(error));
        }
    }
}


// single view course category 

export const svCourseCategoryApi=(id) => {
    return async(dispatch) => {
        dispatch(svCourseCategoryRequest(id));
                                                                       
        try{
            const res=await axiosApi.get(`/course/course_category/${id}`);
          if (res) {
            dispatch(svCourseCategorySuccess(res?.data))
        }
        }catch(error){
            console.log(error)
            dispatch(svCourseCategoryFail(error));
        }
    }
}


// update course category 

export const updateCourseCategoryApi=(id,state,navigate) => {
    return async(dispatch) => {
        dispatch(updateCategoryRequest(id))

        try{
            const res=await axiosApi.put( `/course/course_category/${id}/`,state)
            if (res){
            dispatch(updateCategorySuccess(res?.data))
            navigate(`/Coursectgry`);
        }
    }catch(error){
            console.log(error)
            dispatch(updateCategoryFail(error))
        }
    }
}
