import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
function Calculate(props) {
  const datas = [
    { id: 1, name: "Nyamirambo" },
    { id: 2, name: "Nyamata" },
  ];
  const inputs = autoCalculateFormInputs;
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const previewOrder = (event) => {
    handelOrderFormData(event, dispatch, setValidated);
  };
  return (
    <div className="container-fluid  main-cal">
      <BreadCrum title="Dashboard" subSubTitle="Calculate" />
      <div class="card cal-main-card">
        <div class="card-body">
          <h5 class="card-title card-title-custom pb-2">
            Calcurate Fertilizer
          </h5>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-12">
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
                    {inputs.map((item, index) => (
                      <SelectInputOption
                        key={`${index}_${item}`}
                        label={item.input}
                        values={datas}
                      />
                    ))}

                    <Button type="submit" className="btn btn-secondary">
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-9 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-title card-title-custom-sm ">
                    All Requested Order
                  </div>
                  <div className=" table-responsive">
                    <table class="table table-bordered table-hover">
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
