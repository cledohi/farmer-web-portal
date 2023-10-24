import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import "./login.css";
function Register(props) {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log(`data is :${JSON.stringify(form)}`);
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const goToLogin = () => {
    navigate("/");
  };
  return (
    <div className="wrapper d-flex align-items-center justify-content-center w-100">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="login p-3 "
      >
        <h2 className="mb-3 title"> Sign up to Agro-Tech Store</h2>
        <Form.Group controlId="firstName">
          <Form.Label className="login-label">First name</Form.Label>
          <Form.Control required type="text" placeholder="Enter First name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            First name required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label className="login-label">Last name</Form.Label>
          <Form.Control required type="text" placeholder="Enter Last name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Last name required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label className="login-label">Phone Number</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Phone Number Required.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="nationalId">
          <Form.Label className="login-label">National Id</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Enter National Id"
              required
            />
            <Form.Control.Feedback type="valid">Wawoo!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please National Id Required
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label className="login-label">Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" required />
          <Form.Control.Feedback type="valid">wawoo</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Password Required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label className="login-label">Address</Form.Label>
          <Form.Control type="password" placeholder="Enter address" required />
          <Form.Control.Feedback type="valid">wawoo</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Address Required
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex justify-content-between mt-4">
          <Button type="submit" className="btn btn-lg btn-primary">
            Register
          </Button>
          <Button
            type="button"
            onClick={goToLogin}
            className="btn btn-lg btn-success"
          >
            Login Here
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
