import React, { useEffect,useState } from "react";
import Layout from "../Layout";
import { Card, Table, Button,Col,Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { allStudentCourseApi,deleteStudentCourseApi } from "../../Store/Student Course API/useApi";
import { useDispatch, useSelector } from "react-redux";
import { map,range } from "lodash";
import {BiLeftArrow,BiRightArrow} from "react-icons/bi";
import {useParams,useNavigate} from "react-router-dom"

function StudentCoursePage() {

  // all student course 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allStudentCourseApi());
  }, []);

  const { allstudentCourse } = useSelector((state) => ({
    allstudentCourse: state.StudentCourseReducer.allstudentCourseDetails,
  }));

  const tableData = allstudentCourse?.results;

//  Pagination 

const [pages, setPages] = useState(1);

  useEffect(() => {
    dispatch(allStudentCourseApi(pages))
  },[dispatch,pages])

  const totalPages = Math.ceil(allstudentCourse?.count / 10);

  const pageArray = range(1, totalPages + 1);

  // delete 
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() =>{
    dispatch(allStudentCourseApi(params.id));
  },[]);

  const deleteStudentCourse = (id) => {
    dispatch(deleteStudentCourseApi(id,navigate));
  };

  return (
    <div>
      <Layout>
        <div
          style={{
            backgroundColor: "rgb(248 248 251)",
            height: "100vh",
            paddingTop: "50px",
          }}
        >
          <Card
            className="main-card2"
            style={{
              borderRadius: "5px",
              marginTop: "0px",
              border: "none",
              marginLeft: "30px",
              width: "70%",
              height: "775px",
            }}
          >
            <div style={{ display: "flex" }}>
              <h5
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#495057",
                  marginLeft: "30px",
                  marginTop: "20px",
                }}
              >
                STUDENT COURSE
              </h5>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  style={{
                    fontSize: "14px",
                    width: "200px",
                    height: "40px",
                    border: "none",
                    marginTop: "10px",
                    marginLeft: "550px",
                    backgroundColor: "#34c38f",
                  }}
                >
                  <Link
                    to={`/CreateStdntCrs`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + Create New Course
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <Table
                style={{
                  marginTop: "10px",
                  border: "1px solid rgb(239 242 247)",
                }}
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Course Name</th>
                    <th>Progress</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {" "}
                  {map(tableData, (item, key) => (
                    <tr key={key}>
                      <th scope="row">{(key = key + 1)}</th>
                      <td>{item?.id}</td>
                      <td>{item?.course_name}</td>
                      <td>{item?.progress}</td>
                      <td>
                        <div>
                          <Button
                            style={{
                              backgroundColor: "red",
                              border: "none",
                              padding: "0px",
                              width: "80px",
                              height: "30px",
                              fontSize: "12px",
                            }}
                            onClick={()=>{deleteStudentCourse(item?.id)}}
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
        
          <Row>
              <Col style={{display: "flex" , alignItems: "center", justifyContent: "center"}}>
                <BiLeftArrow onClick={() => {
                  setPages(pages -1)
                }}/>

              </Col>

              {map(pageArray, (page) => (
                <Col onClick={() => setPages(page)}
                className={pages === page && "active"}
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center"
                }}
                >
                  {page}
                  </Col>             
              ))}
                  <Col
                  style={{display: "flex" , alignItems: "center", justifyContent: "center"}}>
                
                <BiRightArrow 
                  onClick={() => {
                    setPages(pages + 1)
                  }}
                />
                </Col>
              
            </Row>
            </Card>
        </div>
      </Layout>
    </div>
  );
}

export default StudentCoursePage;
