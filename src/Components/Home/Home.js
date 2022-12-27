import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Button, Row, Col } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsGoogle } from "react-icons/bs";

function Home() {
  return (
    <div>
      {/* Navbar start */}
      <Navbar id="navbar" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
               <h2>EDISONVALLEY</h2>
            </Navbar.Brand>
            
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#product">About</Nav.Link>
                        <Nav.Link href="#services">Features</Nav.Link>
                        <Nav.Link href="#contact">Team</Nav.Link>
                    </Nav>
                    <a href='#'>
                        <Button className="sign-in-button">Sign in</Button>
                    </a>
                </Navbar.Collapse>

            
        </Container>
      </Navbar>
      {/* Navbar end */}

      {/* Banner start */}

       <div id='banner'>
        <Container>
            <Row my-auto>
                <Col md-6>
                    <div className='text'>
                        <h1>
                            Maker Your Carrier
                            <br />
                            with Edisonvalley
                        </h1>
                        <p>We are a bunch of tech enthusiasts determined to 
                            <br />
                         uplift the society utilising the latest technologies around us</p>
                         <Link to={"/Login"}>
                         <Button className="login-button">Login</Button>
                         </Link>
                    </div>
                </Col>
                <Col md-6>
                    <img src={require("../img1.png")} className="img-fluid" />
                </Col>
            </Row>
        </Container>
       </div>

      {/* Banner end */}

      
      {/* Footer start */}

       <div id="footer">
        <Container>
            <Row>
                <Col md="6">
                    <h2>EDISONVALLEY</h2>
                    <p>
                        <div className='para1'>2020 © Edisonvalley. Design & Develop by Osperb</div> <br />
                        <div className='para2'>We are a bunch of tech enthusiasts determined to <br />
                         uplift the society utilising the latest technologies around us</div>
                    </p>
                </Col>
                <Col ma="6">
                    <Row>
                        <Col md="4">
                            <li><h3>Resources</h3></li>
                            <div className='list1'>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </div>
                        </Col>
                        <Col md="4">
                            <li>
                                <h3>Company</h3>
                            </li>
                            <div className='list1'>
                                <li>About Us</li>
                                <li>Ffeatures</li>
                            </div>
                        </Col>
                        <Col md="4">
                            <li>
                                <h3>Social links</h3>
                            </li>
                            <a href="https://www.facebook.com" className='icon1'>
                                <BsFacebook />
                            </a>
                            <a href="https://www.twitter.com" className='icon2'>
                                <BsTwitter />
                            </a>
                            <a href="https://www.google.com" className='icon3'>
                                <BsGoogle />
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
       </div>

      {/* Footer end */}
    </div>
  )
}

export default Home
