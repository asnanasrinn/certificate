import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Allstdnts from './Components/Students/Allstdnts';
import Updatestdnts from './Components/Students/Updatestdnts';
import Stdntvw from './Components/Students/Stdntvw';
import StudentCoursePage from "./Components/Student Course/StudentCoursePage"
import CreateStdntCrs from "./Components/Student Course/CreateStdntCrs"
import Createstdnt from './Components/Students/Createstdnt';
import Courses from './Components/Courses/Courses';
import Createcrs from './Components/Courses/Createcrs';
import Updatecrs from './Components/Courses/Updatecrs';
import Coursectgry from './Components/Category/Coursectgry';
import Createcrsctgry from './Components/Category/Createcrsctgry';
import Updatecrsctgry from './Components/Category/Updatecrsctgry';
import Certificate from "./Components/Certificate/Certificate"

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Allstdnts" element={<Allstdnts />}/>
        <Route path="/Updatestdnts/:id" element={<Updatestdnts />}/>
        <Route path="/Stdntvw/:id" element={<Stdntvw />}/>
        <Route path="/StudentCoursePage" element={<StudentCoursePage />}/>
        <Route path="/CreateStdntCrs" element={<CreateStdntCrs />}/>
        <Route path="/Createstdnt" element={<Createstdnt />}/>
        <Route path="/Courses" element={<Courses />}/>
        <Route path="/Createcrs" element={<Createcrs />}/>
        <Route path="/Updatecrs/:id" element={<Updatecrs />}/>
        <Route path="/Coursectgry" element={<Coursectgry />}/>
        <Route path="/Createcrsctgry" element={<Createcrsctgry />}/>
        <Route path="/Updatecrsctgry/:id" element={<Updatecrsctgry />}/>
        <Route path="/Certificate" element={<Certificate />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
