import React, { useEffect, useRef } from "react";
import { Form,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const nameRef = useRef('')
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleRegister = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(email, password);
  };
  useEffect(()=>{
    if(user){
      navigate('/home')
    }
   },[user])
  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <div className="container w-50 mx-auto p-5 rounded mb-5 shadow-sm border bg-white rounded">
      <h2 className="text-center">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p>
          New to genius car?{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={navigateLogin}
            className="text-danger"
          >
            Please Login
          </span>
        </p>
      </Form>
    </div>
  );
};

export default Register;
