import React, { useEffect, useState } from "react";
import BreadCrum from "./components/breadcrum";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { MdContentCut } from "react-icons/md";
import SelectInputOption from "../../common/SelectInputOption";
import { autoCalculateFormInputs } from "../../../utils/utils";
import Badge from "react-bootstrap/Badge";
import "./cal.css";
import { handelOrderFormData } from "../../../redux/actions/CalculatorAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../common/Loading";
import MessageError from "../../common/Message";
import { intiatePaegable } from "../../../utils/utils";
import {
  allFertilizer,
  allLands,
  allSeeds,
} from "../../../redux/actions/fetchDataActions";
import CalculatorResult from "./components/CalculatorResult";

function Calculate(props) {
  const {
    user: {
      loginUser: {
        data: {
          user: { username },
        },
      },
    },
    order: {
      error,
      loading,
      isCal,
      success,
      messageError: message,
      fertilizers,
      seeds,
      lands,
    },
  } = useSelector((state) => state.app);
  const pageable = intiatePaegable;
  const inputs = autoCalculateFormInputs;
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const previewOrder = (event) => {
    handelOrderFormData(event, dispatch, setValidated);
  };
  // Defined the function to fetch fertilizers
  const fetchFertilizers = () => {
    dispatch(allFertilizer(pageable));
    dispatch(allSeeds(pageable));
    dispatch(allLands({ username }));
  };

  // useEffect to fetch fertilizers when the component mounts
  useEffect(() => {
    fetchFertilizers();
  }, []);

  return (
    <div className="container-fluid  main-cal">
      <BreadCrum title="Dashboard" subSubTitle="Calculate" />
      <div className="card cal-main-card">
        <div className="card-body">
          <h5 className="card-title card-title-custom pb-2">
            Calcurate Fertilizer
          </h5>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-12">
              {isCal ? (
                <CalculatorResult />
              ) : (
                <div className="card">
                  <div className="card-body">
                    <div className="card-title card-title-custom-sm ">
                      Calculator
                    </div>
                    <Form
                      noValidate
                      validated={validated}
                      onSubmit={previewOrder}
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
                      {inputs.map((item, index) => (
                        <SelectInputOption
                          key={`${index}_${item}`}
                          label={item.input}
                          values={
                            item.input === "Fertilizer"
                              ? fertilizers
                              : item.input === "Seeds"
                              ? seeds
                              : lands
                          }
                        />
                      ))}

                      <Button type="submit" className="btn btn-secondary">
                        {loading ? (
                          <Loading />
                        ) : (
                          <span>calculate Fertilizer</span>
                        )}
                      </Button>
                    </Form>
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-9 col-lg-9 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-title card-title-custom-sm ">
                    All Requested Order
                  </div>
                  <div className=" table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Action</th>
                          <th>Status</th>
                          <th>C.Names</th>
                          <th>Phone.No</th>
                          <th>Area</th>
                          <th>Fertilizer.Q</th>
                          <th>Seed.Q</th>
                          <th>Seed.P</th>
                          <th>Fertilizer.P</th>
                          <th>Total.P</th>
                          <th>Total.Q</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="d-flex flex-row gap-2">
                            <BsFillCheckSquareFill size={35} color="green" />
                            <MdContentCut size={35} color="red" />
                          </td>
                          <td>
                            <Badge bg="danger"> Pending..</Badge>
                          </td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculate;
