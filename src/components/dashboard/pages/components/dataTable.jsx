import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch } from "react-redux";
import { filterData } from "../../../../redux/actions/dataTableAction";
import { tableHeaderStyle } from "../../../../utils/utils";
const DataTableCustom = ({ data, title, columns }) => {
  const dispatch = useDispatch();
  const setMyFilteredData = (inputText) => {
    const search = inputText.toLowerCase();
    const resultFilter = data.filter((item) =>
      item?.land?.farmer?.firstname.toLowerCase().match(search)
    );
    dispatch(filterData(resultFilter));
  };

  return (
    <>
      <DataTable
        pagination
        responsive={true}
        title={title}
        selectableRows
        paginationPerPage={5}
        customStyles={tableHeaderStyle}
        selectableRowsHighlight
        highlightOnHover
        columns={columns}
        data={data}
        subHeader
        subHeaderComponent={
          <input
            className="w-25 form-control"
            placeholder="search here..."
            type="text"
            onChange={(e) => setMyFilteredData(e.target.value)}
          />
        }
      />
    </>
  );
};

export default DataTableCustom;
