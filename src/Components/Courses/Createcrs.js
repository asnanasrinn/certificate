import {useEffect, useState} from 'react'
import Layout from '../Layout'
import {Card,Form,Col,Row,FormGroup,Button} from "react-bootstrap"
import {Label} from "reactstrap"
import { useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import {createCourseApi} from "../../Store/Course API/useApi"
import { allCourseCategoryApi } from '../../Store/Course Category API/useApi'
import {map} from "lodash";

function Createcrs() {
   
  const dispatch=useDispatch();
  const navigate =useNavigate();
  const [input,setInput]=useState();

  const HandleCreateCourse=(e) =>{
    e.preventDefault();
    if (input) {
    dispatch(createCourseApi(input,navigate)); 
  }
  };

  useEffect(() => {
    dispatch(allCourseCategoryApi());
  },[dispatch]);

  const {allCourseCategoryDetails} = useSelector((state) => ({
    allCourseCategoryDetails: state.CategoryReducer.allCourseCategoryDetails,
  }));
  console.log(allCourseCategoryDetails.results);
  
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
            CREATE COURSE
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
            <Form  onSubmit={HandleCreateCourse}>
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
                      onChange={(e) =>
                        setInput({...input,course_name : e.target.value})}
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
                      type="text"
                      onChange={(e) =>
                        setInput({...input,duration  : e.target.value})}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <div>
                  <FormGroup>
                    <label
                      for="exampleName"
                      style={{ fontSize: "16px", FontWeight: "600",marginTop:"20px" }}
                    >
                       Course Category :
                    </label>
                    <select className="form-control"
                    onChange={(e) =>
                      setInput({...input,course_category: e.target.value})}
                    >
                      <option>
                        Select a Course Category... 
                      </option>
                      {map(allCourseCategoryDetails?.results,(item) => (
                      <option value={item.id}>
                        {item.course_category_name}
                      </option>
                      ))}
                    </select>
                  </FormGroup>
                  </div>
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

export default Createcrs
