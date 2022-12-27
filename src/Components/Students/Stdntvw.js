import React, { useEffect } from 'react';
import Layout from "../Layout";
import "./Stdntvw.css";
import {Card,Col,Row,Button,Container} from "reactstrap";
import { useDispatch,useSelector } from 'react-redux';
import { deleteStudentApi, singleViewApi } from '../../Store/Student API/useApi';
import { useParams,useNavigate } from 'react-router-dom';
import {map} from "lodash"
import {Link} from "react-router-dom"


const Stdntvw = () => {

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const {singleView} =useSelector((state) => ({
    singleView:state.StudentReducer.singleViewDetails,
  }));

  console.log(singleView)

  useEffect(() =>{
    dispatch(singleViewApi(params.id))
  },[dispatch])

  const deleteStudents = () => {
    dispatch(deleteStudentApi(params.id,navigate))
  }

  const course = singleView?.student_courses;

  return (
    <div>
      <Layout>
        <div className='main-card'>
            <h5  style={{ fontSize:"16px", fontWeight:"600", color:"#495057",marginLeft:"30px",paddingTop:"40px"}}>
                STUDENT VIEW
            </h5>
            <Card className="main-card1"
               style={{width:"55%",height:"316px",borderRadius:"5px",marginLeft:"25px",border:"none",marginTop:"30px"}}>
               <div>
                <Row>
                    <Col md="6" style={{paddingLeft:"40px",paddingTop:"25px"}}>
                        <h6 style={{fontSize:"20px"}}>{singleView.full_name}</h6>
                        <p style={{color:"#85889b",marginBottom:"0px"}}>
                            Date of birth:{singleView.dob}<br />
                            Address:{singleView.address}<br />
                            Phone Number:{singleView.phone}
                        </p>
                    </Col>
                    <Col md="6">
                        <img 
                          src={require("../img4.jpg")} 
                          alt="error"
                          style={{width:"150px",height:"150px",marginTop:"25px",marginLeft:"10px",
                                   borderRadius:"5px"}} />
                        <p style={{color:"#85889b"}}>
                            Designation:{singleView.designation}
                        </p>
                    </Col>
                </Row>
                <Row style={{marginTop:"-30px"}}>
                    <Col md="12" style={{paddingLeft:"40px"}}>
                        <h6 style={{fontSize:"smaller"}}>Contact Details :</h6>
                        <p style={{color:"#85889b"}}>
                            Email: {singleView.email}<br />
                            Mobile: {singleView.phone}
                        </p>
                    </Col>
                </Row>
                <div className='bottombtn'style={{display:"flex",justifycontent:"flex-end" ,marginLeft:"580px",
                                                 marginTop:"-20px" }}>
                    <div className='bottombtn1'>
                        <Button 
                           onClick={() => navigate(`/Updatestdnts/${params.id}`)}
                           style={{backgroundColor:"#4c6a61",color:"white",width:"100px",height:"30px",
                                  fontSize:"16px",padding:"20px",border:"none",marginRight:"20px"}}>
                             Update
                        </Button>
                    </div>
                    <div className='bottombtn2'>
                        <Button 
                           onClick={deleteStudents}
                           style={{backgroundColor:"#e6555e",width:"100px",height:"30px",fontSize:"16px",fontSize:"16px",
                                 padding:"20px",border:"none"}}>
                            Delete
                        </Button>
                    </div>
                </div>
               </div>
            </Card>
          <Row> 
            {map(course, (item,key) => (
            <Card style={{width:"35%",height:"200px",borderRadius:"5px",marginLeft:"35px",border:"none",marginTop:"30px"}}>
              <Container>
                <div className='d-flex'>
                  <div style={{marginTop:"30px",marginLeft:"20px"}}> 
                    <h6>COURSE NAME :</h6>
                    <h6>DURATION :</h6>
                    <h6>PROGRESS :</h6>
                    <h6>COURSE CATEGORY NAME :</h6>
                    <h6>DESIGNATION :</h6>
                  </div>
                  <div style={{color:"red",marginTop:"30px",marginLeft:"20px"}}>
                    <h6>{item.course.course_name}</h6>
                    <h6>{item.course.duration}</h6>
                    <h6>{item.progress ? item.progress : "NO"}</h6>
                    <h6>{item.course.course_category.course_category_name}</h6>
                    <h6>{item.course.course_category.designation}</h6>
                  </div>
                </div>
              </Container>
            </Card>
            ))}
          </Row>
          <Row style={{display:"flex",alignItems:"center",marginTop:"30px",marginLeft:"30px"}}>
             <Col md={6} style={{justifyContent:"center"}}>
                <Link
                to={"/CreateStdntCrs"}
                style={{backgroundColor:"#34C38F",border:"none",textDecoration:"none",color:"white",padding:"10px",borderRadius:"5px"}}>
                  + Create New Course
                </Link>
             </Col>
             <Col md={6} style={{justifyContent:"center"}}>
                <Link
                to={"/Certificate"}
                style={{backgroundColor:"#611fd5",border:"none",textDecoration:"none",color:"white",padding:"10px",borderRadius:"5px"}}>
                  Certificate
                </Link>
             </Col>
          </Row>

        </div>
      </Layout>
    </div>
  )
}

export default Stdntvw;


