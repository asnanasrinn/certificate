import React, { useEffect, useState } from "react";
import Layout from '../Layout'
import {Card,Form,Col,Row,FormGroup,Button} from "react-bootstrap"
import {Label,Input} from "reactstrap"
import { useParams,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { singleviewCourseApi,updateCourseApi } from "../../Store/Course API/useApi"


function Updatecrs() {

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const [state,setState] = useState ();
  const id = params?.id;

  const {singleCourse} =useSelector((state) => ({
    singleCourse:state.CourseReducer.singleviewCourseDetails,
  }));

  // console.log(singleCourse)

  useEffect(() => {
    dispatch(singleviewCourseApi(params.id))
  },[])

  useEffect(() =>{
    setState(singleCourse);
  },[singleCourse])

  const Handle = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value,
    });
  };

  const HandleUpdateCourse = (e) => {
    e.preventDefault();
    dispatch(updateCourseApi(id,state,navigate));
  };

  return (
    <div>
         <Layout>
        <div style={{ backgroundColor: "rgb(248 248 251)", height: "100vh" }}>
          <h5
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#495057",
                    marginLeft: "30px",
                    paddingTop: "40px",
                  }}
          >
            UPDATE COURSE
          </h5>
          <Card
            className="main-card2"
            style={{
              width: "55%",
              height: "500px",
              borderRadius: "3px",
              marginTop: "20px",
              marginLeft:"20px",
              border: "none",
            }}
          >
            <Form onSubmit={(e)=>HandleUpdateCourse(e)}>
            <div className="form" style={{display:"flex",marginLeft:"20px"}}>
              <Col md={6}>
                <Row>
                  <FormGroup>
                    <Label
                      for="exampleName"
                      style={{ fontSize: "16px", FontWeight: "600",marginTop:"30px" }}
                    >
                       Course Name :
                    </Label><br />
                    <input
                      id="exampleName"
                      name="course_name"
                      placeholder="Enter a course"
                      type="text"
                      onChange={(e) =>Handle(e)}
                      value={state?.course_name}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <Label
                      for="exampleName"
                      style={{ fontSize: "16px", FontWeight: "600",marginTop:"25px" }}
                    >
                       Duration :
                    </Label><br />
                    <input
                      id="exampleName"
                      name="duration"
                      placeholder="Enter a duration"
                      type="number"
                      onChange={(e) =>Handle(e)}
                      value={state?.duration}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <Label
                      for="exampleName"
                      style={{ fontSize: "16px", FontWeight: "600",marginTop:"20px" }}
                    >
                       Course Category :
                    </Label><br />
                    <Input 
                    id="exampleSelect"
                    name="select"
                    type="select"
                    onChange={(e) =>Handle(e)}
                    value={state?.course_category}
                    >
                      <option>
                        Select a Course Category... 
                      </option>
                      <option>
                        back-end
                      </option>
                      <option>
                        front-end
                      </option>
                      <option>
                        full stack
                      </option>
                    </Input>

                  </FormGroup>
                </Row>
              </Col>
              <Col md={6}>
              <div className='bottombtn' style={{display:"flex",justifyContent:"flex-end",marginTop:"410px"}}>
                    <div className='bottombtn1'>
                        <Button
                            style={{ backgroundColor: "rgb(243 243 243)", color: "rgb(76 106 97)", width: "105px" ,
                            border:"none",marginRight:"15px",padding:"12px"}}>
                             Back
                        </Button>
                    </div>
                    <div className='bottombtn2'>
                    <Button style={{ backgroundColor: "rgb(76 106 97)", width: "105px",padding:"12px",
                                border:"none",color:"white" ,fontWeight:"400",marginRight:"90px"}}
                                type="submit">
                            Update
                        </Button>
                    </div>
                </div>
              </Col>
            </div>
            </Form>
          </Card>
        </div>
      </Layout>
    </div>
  )
}

export default Updatecrs
