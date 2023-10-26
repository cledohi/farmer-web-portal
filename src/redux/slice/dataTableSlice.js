import { createSlice } from "@reduxjs/toolkit";
import {
  getAllOrders,
  handelDatTableResults,
  updatePageable,
} from "../actions/dataTableAction";

const initalDataState = {
  loading: false,
  error: null,
  data: [],
  messageError: null,
  success: false,
  size: 5,
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
    [updatePageable]: (state, action) => {
      const {
        payload: { size, page },
      } = action;
      state.size = size;
      state.page = page;
    },
  },
});
export { initalDataState };
export default dataTableInformation.reducer;
