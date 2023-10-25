import React from "react";
import Spinner from "react-bootstrap/Spinner";
function Loading(props) {
  return (
    <>
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="light" />
      <span>loading...</span>
    </>
  );
}

export default Loading;
