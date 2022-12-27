import React from 'react';
import "./Dsidebar.css";
import { BiHomeCircle } from "react-icons/bi";
import { IoBookSharp } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { Link } from 'react-router-dom';

function Dsidebar() {
  return (
    <div>
      <div id="sidebar">
        <div className='title1'>
            <div className='icon1'>
                <a>
                    <BiHomeCircle />
                </a>
            </div>
            <div className='heading'>
            <Link to={"/Dashboard"} >
               <h5 className='head' style={{color:"black"}} >Dashboard</h5>        
            </Link>   
            </div>
        </div>
        <div className='title'>
            <div className='icon'>
                <a>
                    <IoMdContacts />
                </a>
            </div>
            <div className='heading'>
                <h5>Students</h5>
               <Link className='links' to={"/Allstdnts"}><li>All Students</li></Link> 
               {/* <Link className='links' to={"/Updatestdnts"}><li>Update Students</li></Link>  */}
               <Link className='links' to={"/Createstdnt"}><li>Create Students</li></Link>
               <Link className='links' to={"/StudentCoursePage"}><li>Students Course</li></Link>
            </div>
        </div>
        <div className='title'>
            <div className='icon'>
                <a>
                    <IoBookSharp />
                </a>
            </div>
            <div className='heading'>
                <h5>Courses</h5>
               <Link className='links' to={"/Courses"}><li>All Courses</li></Link> 
               {/* <Link className='links' to={"/Updatecrs"}><li>Update Courses</li></Link> */}
               <Link className='links' to={"/createcrs"}><li>Create Courses</li></Link>
            </div>
        </div>
        <div className='title'>
            <div className='icon'>
                <a>
                    <BiCategory />
                </a>
            </div>
            <div className='heading'>
                <h5>Courses Category</h5>
               <Link className='links' to={"/Coursectgry"}><li>All Courses Category</li></Link> 
               {/* <Link className='links' to={"/Updatecrsctgry"}><li>Update Courses Category</li></Link>  */}
               <Link className='links' to={"/Createcrsctgry"}><li>Create Courses Category</li></Link> 
            </div>
        </div>
      
      </div>
    </div>
  )
}

export default Dsidebar
