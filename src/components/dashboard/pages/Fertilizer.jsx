import React from "react";
import "./cal.css";
import BreadCrum from "./components/breadcrum";
function Fertilizer(props) {
  return (
    <div className="main-cal container-fluid">
      <BreadCrum title="Dashboard" subSubTitle="Fertilizer" />
      <div className="card cal-main-card">
        <div className="card-body">
          <h5 className="card-title card-title-custom pb-2">Fertilizer </h5>
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
              List of all Fertilizer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fertilizer;
