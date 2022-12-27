import React from 'react';
import "./Dheader.css";
import { Form, Navbar, Container,Nav, NavDropdown } from 'react-bootstrap'
import {HiMenu} from "react-icons/hi";
import {CgProfile} from "react-icons/cg";
import { logoutApi } from '../../Store/Login API/useApi';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

function Dheader() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutApi(navigate))
  }
  const{loginDetails}=useSelector((state)=>({
    loginDetails:state.LoginReducer.loginDetails,
  }))

  return (
    <div>
      <Navbar id="header" expand="lg">
        <Container>
            <Navbar.Brand href="#">
                <h2>Edisonvalley</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px"}}
                navbarScroll
            >
                <HiMenu className='menu-bar'/>
                <Form className="d-flex">
                    <Form.Control 
                      type='search'
                      placeholder='search'
                      className='search-bar'
                      aria-label='Search'
                    />
                </Form>
            </Nav>
            <CgProfile classsName="profile" />
            <NavDropdown style={{marginLeft:"10px"}} title={loginDetails?.username} id="navbarScrollingDropDown">
                <NavDropdown.Item href='#action3'>View Profile</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>Settings </NavDropdown.Item>
                <NavDropdown.Item href='#action5' onClick={handleLogout} style={{color:"red"}}>Logout </NavDropdown.Item>
            </NavDropdown>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Dheader
