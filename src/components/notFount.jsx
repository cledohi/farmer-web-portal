import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
  const img404 = require("../assets/404.png");
  return (
    <div class="d-flex align-items-center justify-content-center vh-100 page-not-found">
      <div class="text-center row">
        <div class=" col-md-6">
          <img src={img404} alt="" class="img-fluid" />
        </div>
        <div class=" col-md-6 mt-5">
          <p class="fs-3">
            {" "}
            <span class="text-danger">Opps!</span> Page not found.
          </p>
          <p class="lead">The page you’re looking for doesn’t exist.</p>
          <Link to="/" class="btn btn-dark">
            Go back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
