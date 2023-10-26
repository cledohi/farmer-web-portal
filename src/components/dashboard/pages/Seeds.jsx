import React from "react";
import BreadCrum from "./components/breadcrum";

function Seeds(props) {
  return (
    <div className="main-cal container-fluid">
      <BreadCrum title="Dashboard" subSubTitle="Seeds" />
      <div className="card cal-main-card"></div>
      <div className="card cal-main-card">
        <div className="card-body">
          <h5 className="card-title card-title-custom pb-2">
            Seeds Information
          </h5>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-title card-title-custom-sm "></div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-8 col-sm-12">
              {" "}
              List of all users
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seeds;
