import React, { useEffect, useState } from "react";
import {Card,Form,Col,Row,FormGroup,Button} from "react-bootstrap"
import {Label} from "reactstrap"
import Layout from '../Layout'
import { useParams,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { svCourseCategoryApi ,updateCourseCategoryApi} from "../../Store/Course Category API/useApi"

function Updatecrsctgry() {

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const [state,setState] = useState ();
  const id = params?.id;

  const {singleCategory} =useSelector((state) => ({
    singleCategory:state.CategoryReducer.svCourseCategoryDetails,
  }));

  console.log(singleCategory)

  useEffect(() => {
    dispatch(svCourseCategoryApi(params.id))
  },[])

  useEffect(() =>{
    setState(singleCategory);
  },[singleCategory])


  const Handle = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value,
    });
  };

  const HandleUpdateCourseCategory = (e) => {
    e.preventDefault();
    dispatch(updateCourseCategoryApi(id,state,navigate));
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
            UPDATE COURSE CATEGORY
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
            <Form onSubmit={(e)=>HandleUpdateCourseCategory(e)}>
               <div className="form" style={{display:"flex",marginLeft:"20px"}}>
              <Col md={6}>
                <Row>
                  <FormGroup>
                    <Label
                      for="exampleName"
                      style={{ fontSize: "16px", FontWeight: "600",marginTop:"30px" }}
                    >
                       Course Category :
                    </Label><br />
                    <input
                      id="exampleName"
                      name="course_category_name"
                      placeholder="lorem ipsum"
                      type="text"
                      onChange={(e) =>Handle(e)}
                      value={state?.course_category_name}
                      
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <Label
                      for="exampleName"
                      style={{ fontSize: "16px", FontWeight: "600",marginTop:"25px" }}
                    >
                       Designation :
                    </Label><br />
                    <input
                      id="exampleName"
                      name="designation"
                      placeholder="lorem ipsum"
                      type="text"
                      onChange={(e) => Handle(e)}
                      value={state?.designation}
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
                                type="submit" >
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

export default Updatecrsctgry
