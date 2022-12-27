import React, { useEffect, useState } from "react";
import { Button, Card, Form, FormGroup } from "react-bootstrap";
import { Label, Row, Col } from "reactstrap";
import Layout from "../Layout";
import "./Updatestdnts.css";
import { updateStudentApi } from "../../Store/Student API/useApi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Updatestdnts() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [state,setState] = useState();

  const { Updatestdnts } = useSelector((state) => ({
    Updatestdnts: state.StudentReducer.singleViewDetails,
  }));
  console.log(Updatestdnts);

  const catId = params.id;

  useEffect(() => {
    dispatch(updateStudentApi(catId));
  },[dispatch]);

  useEffect(() => {
    setState(Updatestdnts);
  },[Updatestdnts])

  const Handle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const HandleUpdateStudent = (e) => {
    e.preventDefault();
    dispatch(updateStudentApi(catId, navigate,state));
  };
                        
  return (
    <div>
      <Layout>
        <div className="tablecard1">
          <h5
            style={{ fontSize:"20px", fontWeight:"600", color:"#495057",marginLeft:"30px",paddingTop:"40px"}}
          >
            UPDATE STUDENTS
          </h5>
          <Card className="Updt-card" style={{ width: "55%", height: "550px",marginTop:"30px" }}>
            <Form onSubmit={HandleUpdateStudent}>
              <div className="form" style={{marginTop:"20px",marginLeft:"30px",marginRight:"60px"}}>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label
                        for="exampleName"
                        style={{ fontSize: "16px", fontWeight: "600" ,}}
                      >
                        Full Name :
                      </Label><br />
                      <input
                        id="exampleName"
                        name="full_name"
                        placeholder="Fasil Paloli"
                        type="string"
                        onChange={(e) => Handle(e)}
                        value={state?.full_name}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label
                        for="Destination"
                        style={{ FontSize: "smaller", fontWeight: "600", }}
                      >
                        Designation :
                      </Label><br />
                      <input
                        id="exampleDestination"
                        name="designation"
                        placeholder="Lorem ipsum"
                        type="string"
                        onChange={(e) => Handle(e)}
                        value={state?.designation}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label
                        for="exampleEmail"
                        style={{ FontSize: "smaller", fontWeight: "600",marginTop:"15px" }}
                      >
                        Email :
                      </Label><br />
                      <input
                        id="exampleEmail"
                        name="email"
                        placeholder="Devs.osperb@gmail.com "
                        type="email"
                        onChange={(e) => Handle(e)}
                        value={state?.email}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label
                        for="Joining Date"
                        style={{ FontSize: "smaller", fontWeight: "600",marginTop:"15px" }}
                      >
                        Joining Date :
                      </Label><br />
                      <input
                        id="exampleJoiningDate"
                        name="start_date"
                        placeholder=" pic a date"
                        type="date"
                        onChange={(e) => Handle(e)}
                        value={state?.start_date}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label
                        for="exampleDOB"
                        style={{ FontSize: "smaller", fontWeight: "600",marginTop:"15px" }}
                      >
                        Date of Birth :
                      </Label><br />
                      <input
                        id="exampleDateofBirth"
                        name="dob"
                        placeholder=" 09 june,2021"
                        type="date"
                        onChange={(e) => Handle(e)}
                        value={state?.dob}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label
                        for="exampleDate of Leaving"
                        style={{ FontSize: "smaller", fontWeight: "600",marginTop:"15px" }}
                      >
                        Date of Leaving :
                      </Label><br />
                      <input
                        id="exampleDOL"
                        name="end_date"
                        placeholder=" 09 jan,2021"
                        type="date"
                        onChange={(e) => Handle(e)}
                        value={state?.end_date}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label
                        for="exampleAddress"
                        style={{ FontSize: "smaller", fontWeight: "600",marginTop:"15px" }}
                      >
                        Address :
                      </Label><br />
                      <input
                        id="exampleAddress"
                        name="address"
                        placeholder=" Malappuram"
                        type="string"
                        onChange={(e) => Handle(e)}
                        value={state?.address}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label
                        for="examplePhone"
                        style={{ FontSize: "smaller", fontWeight: "600",marginTop:"15px" }}
                      >
                        Phone Number :
                      </Label><br />
                      <input
                        id="examplePhone"
                        name="phone"
                        placeholder=" +91 9345678954"
                        type="number"
                        onChange={(e) => Handle(e)}
                        value={state?.phone}
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
                    <input id="exampleFile" name="file" type="file" />
                  </FormGroup>
                  </Col>
                <div className="bottombtn" style={{display:"flex",justifyContent:"flex-end"}}>
                  <div className="bottombtn1" >
                    <Button
                      style={{ backgroundColor: "rgb(243 243 243)", color: "rgb(76 106 97)", width: "105px" ,
                             border:"none",marginRight:"15px",padding:"12px"}}
                    >
                      Back
                    </Button>
                  </div>
                  <div className="bottombtn2">
                    <Button
                    type="submit"
                    style={{ backgroundColor: "rgb(76 106 97)", width: "105px",padding:"12px",
                                border:"none",color:"white" ,fontWeight:"400",marginRight:"20px"}}>
                      Update
                    </Button>
                  </div>
                </div>
               
              </div>
            </Form>
          </Card>
        </div>
      </Layout>
    </div>
  );
}

export default Updatestdnts;
