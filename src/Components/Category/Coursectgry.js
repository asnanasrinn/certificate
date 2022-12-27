import React, { useEffect,useState } from 'react';
import Layout from "../Layout";
import {Card,Table,Col,Row, FormGroup,} from "react-bootstrap";
import { Input } from 'reactstrap';
// import { Pagination,PaginationItem, PaginationLink } from 'reactstrap'
import { useSelector,useDispatch } from 'react-redux';
import { allCourseCategoryApi, deleteCourseCategoryApi } from '../../Store/Course Category API/useApi';
import {map,range} from "lodash";
import {BiLeftArrow,BiRightArrow} from "react-icons/bi";
import {BsPencilFill, BsXLg} from "react-icons/bs";
import {useNavigate,useParams} from "react-router-dom"

function Coursectgry() {

  // create 
  const dispatch = useDispatch();

  const {allCourseCategory} =useSelector((state) => ({
    allCourseCategory:state.CategoryReducer.allCourseCategoryDetails,
  }));

  const tableData = allCourseCategory?.results

// delete 
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() =>{
    dispatch(allCourseCategoryApi(params.id));
  },[]);

  const deleteCourseCategory = (id) => {
    dispatch(deleteCourseCategoryApi(id,navigate));
  };

  // pagination 
  const [pages, setPages] = useState(1);

  useEffect(() => {
    dispatch(allCourseCategoryApi(pages))
  },[dispatch,pages])

  const totalPages = Math.ceil(allCourseCategory?.count / 10);

  const pageArray = range(1, totalPages + 1);

  return (
    <div>
        <Layout>
        <div style={{ backgroundColor: "rgb(248 248 251)", height: "100%" }}>
          <h5
             style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#495057",
              marginLeft: "30px",
              paddingTop: "40px",
            }}
          >
            COURSE CATEGORIES
          </h5>
          <Card
            className="main-card2"
            style={{
              width: "70%",
              height: "650px",
              borderRadius: "3px",
              marginTop: "20px",
              border: "none",
              marginLeft:"30px"
            }}
          >
            <div>
            <Table style={{ marginTop: "10px",}}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Course Category Name</th>
                    <th>Designation</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody> {map(tableData,(item,key)=>(
                  <tr key={key}>
                    <th scope="row">
                      <FormGroup check inline>
                        <Input type="checkbox" />
                      </FormGroup>
                    </th>
                    <td>{item?.id}</td>
                    <td>{item?.course_category_name}</td>
                    <td>{item?.designation}</td>
                    <td> <BsPencilFill style={{color:"rgb(58,58,213)"}}
                          onClick={() => navigate(`/Updatecrsctgry/${item.id}`)}/>  
                    <BsXLg style={{color:"red", marginLeft:"15px"}}
                    onClick={()=>{deleteCourseCategory(item?.id)}}
                    /> </td>
                  </tr>
                  ))}
                </tbody>
              </Table>

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
            </div>
          </Card>
        </div>
      </Layout>
    </div>
  )
}

export default Coursectgry
