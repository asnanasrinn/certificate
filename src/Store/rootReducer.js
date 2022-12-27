import { combineReducers } from "redux"
import LoginReducer from "./Login API/loginReducer"
import StudentReducer from "./Student API/StudentReducer"
import CategoryReducer from "./Course Category API/CategoryReducer"
import CourseReducer from "./Course API/CourseReducer"
import StudentCourseReducer from "./Student Course API/StudentCourseReducer"
   
const rootReducer = combineReducers({
LoginReducer,
StudentReducer,
CategoryReducer,
CourseReducer,
StudentCourseReducer,
})

export default rootReducer