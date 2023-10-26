import React, { useState, useEffect } from "react";
import BreadCrum from "./components/breadcrum";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import Badge from "react-bootstrap/Badge";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { MdContentCut } from "react-icons/md";
import { getAllOrders } from "../../../redux/actions/dataTableAction";
import DataTableCustom from "./components/dataTable";
import { orderColumns } from "../../../utils/utils";
function HomeDashboard(props) {
  const {
    dataTable: {
      loading,
      error,
      data,
      filteredData,
      messageError,
      success,
      size,
      page,
    },
  } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const fetchOrders = () => {
    dispatch(getAllOrders({ size, page }));
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="main-cal container-fluid">
      <BreadCrum title="Dashboard" subSubTitle="Home" />
      <div className="card">
        <div className="card-body">
          <DataTableCustom
            data={filteredData}
            columns={orderColumns(dispatch, true)}
            title="All Orders In Agro-Tech"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
