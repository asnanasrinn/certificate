import React, { useState } from 'react';
import {Card} from "react-bootstrap";
import "./Login.css";
import {Button,Form,Input} from "reactstrap"
import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate } from 'react-router-dom';
import { loginApi } from '../../Store/Login API/useApi';

const Login = () => {
  
  const { loading } = useSelector((state) => ({
    loading:state.LoginReducer.loading,
  }));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({username:"",password:""})
 
  const handleSubmitLogin=(e)=>{
        e.preventDefault()
        dispatch(loginApi(state,navigate)); 
    }
    
  return (
    <div>
      <div className='main-div'>
        <div className='sub-div'>
            <Card className="card1 bg-white">
              <Form onSubmit={(e) => handleSubmitLogin(e) }>
                <h3>EDISONVALLEY</h3>
                <h5 className='h5-login'>Login</h5>
                <span className='box-name'>Username</span>
                <Input 
                  type={"text"}
                  placeholder="Enter Username"
                  name='username'
                  onChange={(e) => setState({...state, username: e.target.value})}
                  className='type-box' 
                />
                <span className='box-name'>Password</span>
                <Input 
                  type={"password"}
                  placeholder="Enter Password"
                  name='password'
                  onChange={(e) => setState({...state, password: e.target.value})}
                  className='type-box' 
                />
                <Button className='login-box'>{loading ? "loading..." : "Login"}</Button><br/>
                <span className='text'>
                    You don't have an account ? 
                    <Link to={"/register"}><a href=''>Register</a></Link>
                </span>
                <footer className='bottom'>© 2020 Edisonvalley. Design & Develop by Osperb </footer>
              </Form>
            </Card>
        </div>
      </div>
    </div>
  )
}

export default Login
