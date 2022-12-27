// import {navigate} from "react-router-dom"
import {axiosApi} from "../api_methods"
import {createStudentFail,createStudentRequest,createStudentSuccess} from "./action"
import {allStudentsFail,allStudentsRequest,allStudentsSuccess} from "./action"
import {singleViewFail,singleViewRequest,singleViewSuccess} from "./action"
import {deleteStudentFail,deleteStudentRequest,deleteStudentSuccess} from "./action"
import {updateStudentFail,updateStudentRequest,updateStudentSuccess} from "./action"


// create student 

export const studentCreateApi=(state,navigate) => {
    return async(dispatch) => {
        dispatch(createStudentRequest(state))

        try{
            const res=await axiosApi.post( "/student/student/",state)
            console.log(res);
            dispatch(createStudentSuccess(res?.data))
            navigate("/Allstdnts")
        }
        catch(error){
            console.log(error)
            dispatch(createStudentFail(error?.res?.data))
        }
    }
}


// all student 

export const allStudentsApi=(page) => {
    return async(dispatch) => {
        dispatch(allStudentsRequest());

        try{
            const res=await axiosApi.get( `/student/student/?page= ${page ? page : 1}`);
          if (res) {
            dispatch(allStudentsSuccess(res.data))
        }
        }catch(error){
            console.log(error)
            dispatch(allStudentsFail(error));
        }
    }
}


// single view 

export const singleViewApi=(id) => {
    return async(dispatch) => {
        dispatch(singleViewRequest());

        try{
            const res=await axiosApi.get(`/student/student/${id}`);
          if (res) {
            dispatch(singleViewSuccess(res?.data))
        }
        }catch(error){
            console.log(error)
            dispatch(singleViewFail(error));
        }
    }
}

// delete student 

export const deleteStudentApi=(id,navigate) => {
    return async(dispatch) => {
        dispatch(deleteStudentRequest());

        try{
            const res=await axiosApi.delete(`/student/student/${id}`);
          if (res) {
            dispatch(deleteStudentSuccess(res?.data))
            navigate('/Allstdnts')
        }
        }catch(error){
            console.log(error)
            dispatch(deleteStudentFail(error));
        }
    }
}

// update student 

export const updateStudentApi=(catId,navigate,state) => {
    return async(dispatch) => {
        dispatch(updateStudentRequest(catId))

        try{
            const res=await axiosApi.put( `/student/student/${catId}/`,state)
            if (res){
            dispatch(updateStudentSuccess(res.data))
            navigate(`/Stdntvw/${catId}`);
        }
    }catch(error){
            console.log(error)
            dispatch(updateStudentFail(error))
        }
    }
}



