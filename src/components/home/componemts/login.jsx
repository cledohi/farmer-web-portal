import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./login.css";
function Login(props) {
  const [validated, setValidated] = useState(false);

  const handelLogin = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <div className="wrapper d-flex align-items-center justify-content-center w-100">
      <Form
        noValidate
        validated={validated}
        onSubmit={handelLogin}
        className="login p-3 "
      >
        <h2 className="mb-3 title"> Login to Agro-Tech Store</h2>
        <Form.Group controlId="firstName">
          <Form.Label className="login-label">
            Username / Phone Number
          </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Username / phone Number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Username or Phone Number Required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label className="login-label">Password </Form.Label>
          <Form.Control required type="password" placeholder="Enter Password" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Password required
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex justify-content-between mt-4">
          <Button type="submit" className="btn btn-lg btn-primary">
            Sign in
          </Button>
          <Button type="button" className="btn btn-lg btn-success">
            create Account
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
