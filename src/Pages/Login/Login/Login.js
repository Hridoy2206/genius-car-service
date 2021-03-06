import React, { useEffect, useRef } from "react";
import { Form,Button } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate()
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleSubmit = (event) =>{
    event.preventDefault()
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  }
 useEffect(()=>{
  if(user){
    navigate(from, { replace: true });
  }
 },[user])
  const navigateRegister = () =>{
    navigate('/register')
  }

  return (
    <div className="container w-50 mx-auto p-5 rounded mb-5 shadow-sm border bg-white rounded">
      <h2 className="text-center">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p>New to genius car? <span style={{cursor:'pointer'}} onClick={navigateRegister} className="text-danger">Please register</span></p>
      </Form>
    </div>
  );
};

export default Login;
