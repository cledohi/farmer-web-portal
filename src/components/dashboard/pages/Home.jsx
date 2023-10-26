import React from "react";
import BreadCrum from "./components/breadcrum";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { MdContentCut } from "react-icons/md";
function HomeDashboard(props) {
  return (
    <div className="main-cal container-fluid">
      <BreadCrum title="Dashboard" subSubTitle="Home" />
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
  );
}

export default HomeDashboard;
