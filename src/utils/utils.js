import React from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { MdContentCut } from "react-icons/md";
import {
  handelApproveOrder,
  handelRejectOrder,
} from "../redux/actions/dataTableAction";
export const headerOptions = ({ data = null, method, token = null }) => {
  const headers = {
    "Content-Type": "application/json",
  };

  // If a token is provided, add it to the headers
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const requestBody = {
    method,
    headers,
    ...(data && { body: JSON.stringify(data) }),
  };
  return requestBody;
};

export const autoCalculateFormInputs = [
  { id: 0, input: "Land" },
  { id: 1, input: "Fertilizer" },
  { id: 2, input: "Seeds" },
];
export const intiatePaegable = { page: 0, size: 40 };

export const orderColumns = (dispatch, isAdmin) => {
  return [
    isAdmin && {
      name: "Reject/Approve",
      cell: (row) => (
        <div className="d-flex gap-2 justify-content-between">
          <button
            className="btn btn-sm btn-danger"
            onClick={(e) => handelRejectOrder(e, row, dispatch)}
          >
            <MdContentCut size={20} color="white" />
          </button>
          <button className="btn btn-sm btn-primary">
            <BsFillCheckSquareFill
              size={20}
              color="white"
              onClick={(e) => handelApproveOrder(e, row, dispatch)}
            />
          </button>
        </div>
      ),
    },
    {
      name: "Client Phone",
      selector: (row) => row.orderUsername,
    },

    {
      name: "Payment Status",
      selector: (row) => row.paymentStatus,
    },
    {
      name: "Order Status",
      selector: (row) => row.orderStatus,
    },
    {
      name: "First Names",
      selector: (row) => row?.land?.farmer?.firstname,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row?.land?.farmer?.lastname,
    },
    {
      name: "Phone No",
      selector: (row) => row?.land?.farmer?.phoneNumber,
    },
    {
      name: "Area",
      selector: (row) => row.area,
    },
    {
      name: "Fertilizer.Quwantity",
      selector: (row) => row.fertilizerQuantity,
    },
    {
      name: "Seed.Quantity",
      selector: (row) => row.seedQuantity,
    },
    {
      name: "Seed.Payment",
      selector: (row) => row.amountToPayForSeed,
    },
    {
      name: "Fertilizer.Payment",
      selector: (row) => row.amountToPayForFertilizer,
    },

    {
      name: "Payment Due",
      selector: (row) => row.amountDue,
      sortable: true,
    },
    {
      name: "Paid Payment",
      selector: (row) => row.amountPaid,
    },
    {
      name: "Order Date",
      selector: (row) => row.created_at,
    },
  ];
};
export const tableHeaderStyle = {
  headCells: {
    style: {
      fontWeight: "bold",
      fontSize: "14px",
      backgroundColor: "#003262",
      color: "#ffffff",
    },
  },
};
