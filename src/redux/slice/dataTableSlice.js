import { createSlice } from "@reduxjs/toolkit";
import {
  approveOrRejectOrder,
  filterData,
  getAllOrderByUserName,
  getAllOrders,
  handelDatTableResults,
  updatePageable,
} from "../actions/dataTableAction";

const initalDataState = {
  loading: false,
  error: null,
  data: [],
  filteredData: [],
  messageError: null,
  success: false,
  size: 40,
  page: 0,
};

export const dataTableInformation = createSlice({
  name: "dataTable",
  initialState: initalDataState,
  extraReducers: {
    //handle order dataTable
    [getAllOrders.pending]: (state) => {
      state.loading = true;
    },
    [getAllOrders.fulfilled]: (state, action) => {
      state.loading = false;
      handelDatTableResults(state, action);
    },
    [getAllOrders.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.messageError = action?.error?.message;
    },
    // find all by username
    [getAllOrderByUserName.pending]: (state) => {
      state.loading = true;
    },
    [getAllOrderByUserName.fulfilled]: (state, action) => {
      state.loading = false;
      handelDatTableResults(state, action);
    },
    [getAllOrderByUserName.rejected]: (state, action) => {
      state.loading = false;
      state.data = [];
      state.filteredData = [];
      state.error = true;
      state.messageError = action?.error?.message;
    },

    [updatePageable]: (state, action) => {
      const {
        payload: { size, page },
      } = action;
      state.size = size;
      state.page = page;
    },
    [filterData]: (state, action) => {
      const { payload } = action;
      state.filteredData = payload.length === 0 ? state.data : payload;
    },
    // aprove or reject Order
    [approveOrRejectOrder.pending]: (state) => {
      state.loading = true;
    },
    [approveOrRejectOrder.fulfilled]: (state, action) => {
      const { payload } = action;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.messageError = payload?.message;
    },
    [approveOrRejectOrder.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.messageError = action?.error?.message;
    },
  },
});
export { initalDataState };
export default dataTableInformation.reducer;
