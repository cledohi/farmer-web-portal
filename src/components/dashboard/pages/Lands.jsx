import React, { useState } from "react";
import BreadCrum from "./components/breadcrum";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Loading from "../../common/Loading";
import MessageError from "../../common/Message";
import { handelLandAssignForm } from "../../../redux/actions/RegisterFarmerActionService";

function Lands(props) {
  const {
    user: {
      error,
      loading,
      loginUser: {
        data: {
          user: { username },
        },
      },
      success,
      messageError: message,
    },
  } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    handelLandAssignForm(event, setValidated, dispatch, username);
  };
  return (
    <div className="container-fluid  main-cal">
      <BreadCrum title="Dashboard" subSubTitle="Lands" />
      <div className="card cal-main-card">
        <div className="card-body">
          <h5 className="card-title card-title-custom pb-2">
            Farmer Land Registration
          </h5>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="p-3 "
          >
            {error || success ? (
              <MessageError
                message={
                  message != null
                    ? message
                    : "System Error Or check Internet connection"
                }
                type={success ? "success" : "danger"}
              />
            ) : null}
            <Form.Group controlId="width">
              <Form.Label className="login-label">Land Width</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter Land width"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Land width required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="height">
              <Form.Label className="login-label">Land Height</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter Land Height"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Height required
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="addressName">
              <Form.Label className="login-label">Land Address</Form.Label>
              <Form.Control
                type="addressName"
                placeholder="Enter Land address"
                required
              />
              <Form.Control.Feedback type="valid">wawoo</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Address Name Required
              </Form.Control.Feedback>
            </Form.Group>
            <div className="d-flex justify-content-between mt-4">
              <Button type="submit" className="btn btn-lg btn-primary">
                {loading ? <Loading /> : <span>Submit Info</span>}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Lands;
