import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Card, Table, Row, Col, Pagination } from "react-bootstrap";
// import { Pagination,PaginationItem, PaginationLink } from 'reactstrap'
import { BsPencilFill, BsXLg } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { map, range } from "lodash";
import { Input, FormGroup } from "reactstrap";
import { allCourseApi, deleteCourseApi } from "../../Store/Course API/useApi";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useParams, useNavigate } from "react-router-dom";

function Courses() {
  // all courses
  const dispatch = useDispatch();

  const { allCourses } = useSelector((state) => ({
    allCourses: state.CourseReducer.allCourseDetails,
  }));

  useEffect(() => {
    dispatch(allCourseApi());
  }, []);

  const tableData = allCourses?.results;

  // delete
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    dispatch(allCourseApi(params.id));
  }, []);

  const deleteCourse = (id) => {
    dispatch(deleteCourseApi(id, navigate));
  };

  // Pagination
  const [pages, setPages] = useState(1);

  useEffect(() => {
    dispatch(allCourseApi(pages));
  }, [dispatch, pages]);

  const totalPages = Math.ceil(allCourses?.count / 10);

  const pageArray = range(1, totalPages + 1);

  return (
    <div>
      <Layout>
        <div style={{ backgroundColor: "rgb(248 248 251)", height: "125vh" }}>
          <h5
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#495057",
              marginLeft: "30px",
              paddingTop: "40px",
            }}
          >
            COURSES
          </h5>
          <Card
            className="main-card2"
            style={{
              width: "70%",
              height: "925px",
              borderRadius: "3px",
              marginTop: "20px",
              border: "none",
              marginLeft: "30px",
            }}
          >
            <div>
              <Table style={{ marginTop: "10px", marginLeft: "0px" }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Course Name</th>
                    <th>Duration</th>
                    <th>Course Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {" "}
                  {map(tableData, (item, key) => (
                    <tr key={key}>
                      <th scope="row">
                        <FormGroup check inline>
                          <Input type="checkbox" />
                        </FormGroup>
                      </th>

                      <td>{item?.id}</td>
                      <td>{item?.course_name}</td>
                      <td>{item?.duration}</td>
                      <td>{item?.course_category}</td>
                      <td>
                        {" "}
                        <BsPencilFill
                          style={{ color: "rgb(58,58,213)" }}
                          onClick={() => navigate(`/Updatecrs/${item?.id}`)}
                        />
                        <BsXLg
                          style={{ color: "red", marginLeft: "15px" }}
                          onClick={() => {
                            deleteCourse(item?.id);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div>
                <Row>
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BiLeftArrow
                      onClick={() => {
                        setPages(pages - 1);
                      }}
                    />
                  </Col>

                  {map(pageArray, (page) => (
                    <Col
                      onClick={() => setPages(page)}
                      className={pages === page && "active"}
                      style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    >
                      {page}
                    </Col>
                  ))}
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BiRightArrow
                      onClick={() => {
                        setPages(pages + 1);
                      }}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Card>
        </div>
      </Layout>
    </div>
  );
}

export default Courses;
