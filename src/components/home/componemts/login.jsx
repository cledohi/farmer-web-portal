import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { handelLogin } from "../../../redux/actions/AuthenticationService";

import Loading from "../../common/Loading";
import MessageError from "../../common/Message";
function Login(props) {
  const {
    user: { error, loading, success, messageError: message },
  } = useSelector((state) => state.app);
  const userState = useSelector((state) => state.app.user);
  const token = userState?.loginUser?.data?.token;
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate("/dashboard");
    }
  }, [navigate, success, token]);

  const submitLogin = (event) => {
    handelLogin(event, dispatch, setValidated);
  };
  const goToSignUp = () => {
    navigate("/register");
  };
  return (
    <div className="wrapper d-flex align-items-center justify-content-center w-100">
      <Form
        noValidate
        validated={validated}
        onSubmit={submitLogin}
        className="login p-3 "
      >
        <h2 className="mb-3 title"> Login to Agro-Tech Store</h2>
        {error ? (
          <MessageError
            message={
              message != null ? message : "Invalid Username/Phone or Password"
            }
            type="danger"
          />
        ) : null}
        <Form.Group controlId="username">
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

        <Form.Group controlId="password">
          <Form.Label className="login-label">Password </Form.Label>
          <Form.Control required type="password" placeholder="Enter Password" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Password required
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex justify-content-between mt-4">
          <Button
            type="submit"
            className="btn btn-lg btn-primary"
            disabled={loading}
          >
            {loading ? <Loading /> : <span>Sign In</span>}
          </Button>
          <Button
            type="button"
            onClick={goToSignUp}
            className="btn btn-lg btn-success"
          >
            create Account
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
