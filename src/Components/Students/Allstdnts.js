import React, { useEffect,useState } from 'react';
import Layout from "../Layout"
import "./Allstdnts.css"
import { Form, Card,Col } from 'react-bootstrap'
import { Table } from 'reactstrap'
import { useSelector,useDispatch } from 'react-redux';
import { allStudentsApi } from '../../Store/Student API/useApi';
import {map,range} from "lodash";
import {Link} from "react-router-dom"
import {BsEyeFill} from "react-icons/bs"
import {BiRightArrow} from "react-icons/bi"


function Allstdnts  () {

  const dispatch = useDispatch();

  const {allstudents} =useSelector((state) => ({
    allstudents:state.StudentReducer.allStudentsDetails,
  }));

  useEffect(() =>{
    dispatch(allStudentsApi())
  },[])

  const tableData = allstudents?.results

  // Pagination 
  const [pages, setPages] = useState(1);

  useEffect(() => {
    dispatch(allStudentsApi(pages))
  },[dispatch,pages])

  const totalPages = Math.ceil(allstudents?.count / 10);

  const pageArray = range(1, totalPages + 1);


  return (
    <div>
      <Layout>
        <div className='tablecard'>
            <h5 style={{ fontSize:"20px", fontWeight:"600", color:"#495057",marginLeft:"30px",paddingTop:"40px"}}>
                STUDENTS
            </h5>
            <Card className="card" style={{width:"96%", height:"80%",marginTop:"25px"}}>
                <Form className="searchbx">
                    <Form.Control  
                    type="search"
                    placeholder='Search'
                    className='me-2 search sbtn'
                    aria-label='search'
                   />
                </Form>
                <div className='show' style={{marginRight:"20px"}}>
                    <p>Show</p>
                    <input type="text" className="input" />
                    <p>entries</p>
                </div>

                <Table style={{marginLeft:"25px",width:"97%" ,borderTop:"1px solid rgb(239 242 247)"}}>
                    <thead >
                        <tr >
                            <th >ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Joining Date</th>
                            <th>DOB</th>
                            <th>Designation</th>
                            <th>Photo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody> {map(tableData,(item,key)=>(
                        <tr key={key}>
                            <th scope="row">{key=key+1}</th>
                            <td>{item?.full_name}</td>
                            <td>{item?.phone}</td>
                            <td>{item?.email}</td>
                            <td>{item?.start_date}</td>
                            <td>{item?.dob}</td>
                            <td>{item?.designation}</td>
                            <td>{ item?.img} </td>
                            <td><Link to={`/Stdntvw/${item?.id}`}><BsEyeFill /></Link></td>
                        </tr>
                        ))}
                    </tbody>


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

                </Table>
               
            </Card>
        </div>
      </Layout>
    </div>
  )
}

export default Allstdnts
