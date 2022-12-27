import {useState} from 'react';
import { Button, Card, Form, FormGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Label, Row, Col } from "reactstrap";
import { studentCreateApi } from '../../Store/Student API/useApi';
import Layout from "../Layout";
import { useDispatch} from "react-redux"
// import "./Createstdnts.css";

function Createstdnt() {

  const dispatch=useDispatch();
  const navigate =useNavigate();
  const [state,setState]=useState({});
  console.log(state);

  const HandleCreateStudent=(e) =>{
    e.preventDefault()
    dispatch(studentCreateApi(state,navigate)); 
  }

  return (
    <div>
    <Layout>
      <div className="tablecard1">
        <h5
          style={{ fontSize:"20px", fontWeight:"600", color:"#495057",marginLeft:"30px",paddingTop:"40px"}}
        >
          CREATE STUDENTS
        </h5>
        <Card className="Updt-card"style={{ width: "55%", height: "550px",marginTop:"30px" }}>
          <Form onSubmit={HandleCreateStudent}>
            <div className="form" style={{marginTop:"20px",marginLeft:"30px",marginRight:"60px"}}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label
                      for="exampleName"
                      style={{ fontSize: "16px", fontWeight: "600" ,marginTop:"15px"}}
                    >
                      Full Name
                    </Label>
                    <input
                      id="exampleName"
                      name="full_name"
                      placeholder=" Enter your full name"
                      type="text"
                      onChange={(e) =>
                      setState({...state,full_name: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label
                      for="Destination"
                      style={{ FontSize: "smaller", fontWeight: "600",marginTop:"15px" }}
                    >
                      Designation
                    </Label>
                    <input
                      id="exampleDestination"
                      name="Destination"
                      placeholder=" Enter your Designation"
                      type="text"
                      onChange={(e) =>
                        setState({...state,designation: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label
                      for="exampleEmail"
                      style={{ FontSize: "smaller", fontWeight: "600",marginTop:"15px" }}
                    >
                      Email
                    </Label><br />
                    <input
                      id="exampleEmail"
                      name="Email"
                      placeholder="Enter your Email "
                      type="email"
                      onChange={(e) =>
                        setState({...state,email: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label
                      for="Joining Date"
                      style={{ FontSize: "smaller", fontWeight: "600",marginTop:"15px" }}
                    >
                      Joining Date
                    </Label>
                    <input
                      id="exampleJoiningDate"
                      name="start_date"
                      placeholder=" pic a date"
                      type="date"
                      onChange={(e) =>
                        setState({...state,start_date: e.trget.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label
                      for="exampleDOB"
                      style={{ FontSize: "smaller", fontWeight: "600",marginTop:"15px" }}
                    >
                      Date of Birth
                    </Label><br />
                    <input
                      id="exampleDateofBirth"
                      name="Date of Birth"
                      placeholder=" Enter your Date of Birth"
                      type="date"
                      onChange={(e) =>
                        setState({...state,dob: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label
                      for="exampleDate of Leaving"
                      style={{ FontSize: "smaller", fontWeight: "600",marginTop:"15px" }}
                    >
                      Date of Leaving
                    </Label>
                    <input
                      id="exampleDOL"
                      name="end_date"
                      placeholder=" pic a date"
                      type="date"
                      onChange={(e) =>
                        setState({...state,end_date: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label
                      for="exampleAddress"
                      style={{ FontSize: "smaller", fontWeight: "600",marginTop:"15px" }}
                    >
                      Address
                    </Label>
                    <input
                      id="exampleAddress"
                      name="Address"
                      placeholder=" Enter your Address"
                      type="string"
                      onChange={(e) =>
                        setState({...state,address: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label
                      for="examplePhone"
                      style={{ FontSize: "smaller", fontWeight: "600",marginTop:"15px" }}
                    >
                      Phone Number
                    </Label>
                    <input
                      id="examplePhone"
                      name="Phone number"
                      placeholder="Enter your Phone Number"
                      type="number"
                      onChange={(e) =>
                        setState({...state,phone: e.target.value})}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Col md={6}>
                <FormGroup>
                  <Label
                    for="exampleFile"
                    style={{ FontSize: "smaller", fontWeight: "600",marginTop:"15px" }}
                  >
                    Image:
                  </Label><br />
                  <input id="exampleFile" name="file" type="file"
                   onChange={(e) =>
                    setState({...state,img: e.target.value})} />
                </FormGroup>
              </Col>
              <div className="bottombtn" style={{display:"flex",justifyContent:"flex-end"}}>
                <div className="bottombtn1">
                  <Button
                     style={{ backgroundColor: "rgb(243 243 243)", color: "rgb(76 106 97)", width: "105px" ,
                     border:"none",marginRight:"15px",padding:"12px"}}
                  >
                    Back
                  </Button>
                </div>
                <div className="bottombtn2">
                <Button type='submit' style={{ backgroundColor: "rgb(76 106 97)", width: "105px",padding:"12px",
                                border:"none",color:"white" ,fontWeight:"400",marginRight:"20px"}}>
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </Card>
      </div>
    </Layout>
  </div>
  )
}

export default Createstdnt
