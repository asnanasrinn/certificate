import {useState,useEffect} from 'react'
import {Card,Form,Col,Row,FormGroup,Button} from "react-bootstrap"
import {Label,Input} from "reactstrap"
import Layout from '../Layout'
import {allStudentsApi} from "../../Store/Student API/useApi"
import { useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import {allCourseApi} from "../../Store/Course API/useApi"
import {createStudentCourseApi} from "../../Store/Student Course API/useApi"
import {map} from "lodash";


function CreateStdntCrs() {

  const dispatch=useDispatch();
  const navigate =useNavigate();
  const [input,setInput]=useState();

  const HandleSubmit=(e) =>{
    e.preventDefault();
    if (input) {
    dispatch(createStudentCourseApi(input,navigate)); 
  }
  };

  useEffect(() => {
    dispatch(allStudentsApi());
  },[dispatch]);

  const {allstudents} = useSelector((state) => ({
    allstudents: state.StudentReducer.allStudentsDetails,
  }));

  useEffect(() => {
    dispatch(allCourseApi());
  },[dispatch]);

  const {allCourseDetails} = useSelector((state) => ({
    allCourseDetails: state.CourseReducer.allCourseDetails,
  }));

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
            CREATE STUDENT COURSE
          </h5>
          <Card
               style={{
                width: "55%",
                height: "500px",
                borderRadius: "3px",
                marginTop: "20px",
                marginLeft:"20px",
                border: "none",
              }}
          >
            <Form onSubmit={HandleSubmit}>
            <div className="form" style={{display:"flex",marginLeft:"20px"}}>
              <Col md={6}>
                <Row>
                  <FormGroup>
                    <Label
                      for="exampleName"
                      style={{ fontSize: "16px", FontWeight: "600",marginTop:"30px" }}
                    >
                       Student name
                    </Label>
                    <Input
                      id="exampleName"
                      name="student"
                      type="select"
                      style={{padding:"10px"}}
                      onChange={(e) =>
                        setInput({...input,student: e.target.value})}
                    >
                       <option>
                        Select Student Name... 
                      </option>
                      {map(allstudents?.results,(item) => (
                      <option value={item.id}>
                        {item.full_name}
                      </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <Label
                      for="exampleName"
                      style={{ fontSize: "16px", FontWeight: "600",marginTop:"25px" }}s
                    >
                       Course name
                    </Label>
                    <Input
                      id="exampleName"
                      name="course"
                      type="select"
                      style={{padding:"10px"}}
                      onChange={(e) =>
                        setInput({...input,course: e.target.value})}
                    >
                      <option>
                        Select a Course Name... 
                      </option>
                      {map(allCourseDetails?.results,(item) => (
                      <option value={item.id}>
                        {item.course_name}
                      </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <Label
                      for="exampleName"
                      style={{ fontSize: "16px", FontWeight: "600",marginTop:"25px" }}s
                    >
                       Progress
                    </Label><br />
                    <input
                      id="exampleName"
                      name="progress"
                      placeholder="example 8/10"
                      type="string"
                      onChange={(e) =>
                        setInput({...input,progress: e.target.value})}
                    />
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
                            Create
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

export default CreateStdntCrs
