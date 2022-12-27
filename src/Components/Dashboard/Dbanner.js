import React, { useEffect } from 'react'
import { Button,Col,Row,Card } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dbanner.css";
import { RiFolderDownloadLine } from "react-icons/ri";
import { BiCopyAlt } from "react-icons/bi";
import { BsFillAwardFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { profileApi } from '../../Store/Login API/useApi';

function Dbanner() {

    const dispatch= useDispatch();
    const{loginDetails}=useSelector((state)=>({
        loginDetails:state.LoginReducer.loginDetails,
    }))
    useEffect(()=>{
        dispatch(profileApi())
    },[dispatch])

  return (
    <div id="dashbanner">
       <h4 className='dashboard-heading'>DASHBOARD</h4>
       <div className='banner'>
        <Row>
            <Col md="4">
                <Card className="Card">
                    <div className='top-card d-flex'>
                        <div>
                            <h4 className='h4'> Welcome Back !</h4>
                            <p>It will seem like simplified</p>
                        </div>
                        <div>
                            <img className='card-image' src={require("../img2.png")} />
                        </div>
                    </div>
                    <div className='bottom-card d-flex'>
                        <Col md="4" className="section1">
                            <img src={require("../img3.jpg")} />
                            <h4 style={{fontSize:"18px",marginTop:"-30px"}}>{loginDetails?.username}</h4>
                            <p>{loginDetails?.email}</p>
                        </Col>
                        <Col md="4" className="section2">
                            <h4>125</h4>
                            <p>Projects</p>
                            <a href="#">
                                <Button className='profile-button'>View Profile</Button>
                            </a>
                        </Col>
                        <Col md="4" className="section2">
                            <h4>$ 1245</h4>
                            <p>Revenue</p>
                        </Col>
                    </div>
                </Card>
            </Col>
            
            <Col md="8" className="part2">
                <Row className="section3">
                    <Col md="6">
                        <Card className="cards">
                            <h5>Available Courses</h5>
                            <p>3</p>
                            <a>
                                <RiFolderDownloadLine />
                            </a>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="cards">
                            <h5>Course Completed Students</h5>
                            <p>2</p>
                            <a>
                                <BsFillAwardFill />
                            </a>
                        </Card>
                    </Col>
                    <Col md="6" className="second-row">
                        <Card className="cards">
                            <h5>Total Students</h5>
                            <p>5</p>
                            <a>
                                <BiCopyAlt />
                            </a>
                        </Card>
                    </Col>
                    <Col md="6" className="second-row">
                        <Card className="cards">
                            <h5>Totl Students</h5>
                            <p>5</p>
                            <a>
                                <BiCopyAlt />
                            </a>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
       </div>
    </div>
  )
}

export default Dbanner
