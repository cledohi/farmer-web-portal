import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
function BreadCrum({ title, subTitle = null, subSubTitle = null }) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/dashboard">{title}</Breadcrumb.Item>
      {subTitle ? <Breadcrumb.Item href="#">{subTitle}</Breadcrumb.Item> : null}
      {subSubTitle ? (
        <Breadcrumb.Item active>{subSubTitle}</Breadcrumb.Item>
      ) : null}
    </Breadcrumb>
  );
}

export default BreadCrum;
