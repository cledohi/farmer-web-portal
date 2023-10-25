import React from "react";
import BreadCrum from "./components/breadcrum";
import "./cal.css";
function Calculate(props) {
  return (
    <div className="container-fluid  main-cal">
      <BreadCrum title="Dashboard" subSubTitle="Calculate" />
      <div class="card cal-main-card">
        <div class="card-body">
          <h5 class="card-title">Calcurate Fertilizer and Request Order</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Calculate;
