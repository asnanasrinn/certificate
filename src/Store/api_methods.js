import axios from "axios"
// import { Notification } from "components/Common/Notification"
// import cookieClient from 'react-cookie'

//apply base url for axios
export const API_URL = "http://api.certificates.edisonvalley.com/api/v1"
// export const API_URL = "http://127.0.0.1:8000/api/v1/web/"

export const axiosApi = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

// axiosApi.defaults.withCredentials = true

axiosApi.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem("token")
    if (token) {
      config.headers["Authorization"] =
        "token " + sessionStorage.getItem("token")
    }else{
      console.log("error");
    }
    
    return config
  },
  // function (error) { }
)





// axiosApi.interceptors.response.use(
//   response => {
//     console.log(response);
//     // if (response.status == 200) {
//     //   cookieClient.save('sessionid', response.data, { path: '/' })
//     // }
//     return response
//   },
//   err => {
//     if (err.response.status === 401) {
//       sessionStorage.clear("token")
//       window.location.reload(false)
//     }
//     return err.response
//   }
// )

// export async function get(url, config = {}) {
//   return await axiosApi.get(url, { ...config }).then(response => response.data)
// }

// export async function post(url, data, config = {}) {
//   return axiosApi
//     .post(url, { ...data }, { ...config })
//     .then(response => response.data)
// }

// export async function ApiPut(url, data, config = {}) {
//   return axiosApi
//     .put(url, { ...data }, { ...config })
//     .then(response => response.data)
// }

// export async function patch(url, data, config = {}) {
//   return axiosApi
//     .patch(url, { ...data }, { ...config })
//     .then(response => response.data)
// }

// export async function del(url, config = {}) {
//   return await axiosApi
//     .delete(url, { ...config })
//     .then(response => response.data)
// }