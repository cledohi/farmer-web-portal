import { createSlice } from "@reduxjs/toolkit";
import { validateResponse } from "../actions/AuthenticationService";

import {
  calculateFertilizer,
  setIsCal,
  setOrderRequest,
} from "../actions/CalculatorAction";

import {
  allFertilizer,
  allLands,
  allSeeds,
  validateFetchResponse,
} from "../actions/fetchDataActions";

const orderInitalState = {
  orders: [],
  loading: false,
  error: null,
  order: {},
  messageError: null,
  user: {},
  calculator: {},
  orderRequest: {},
  isCal: false,
  seeds: [],
  lands: [],
  fertilizers: [],
};

export const orderDetails = createSlice({
  name: "orderDetail",
  initialState: orderInitalState,
  extraReducers: {
    [calculateFertilizer.pending]: (state) => {
      state.loading = true;
    },
    [calculateFertilizer.fulfilled]: (state, action) => {
      state.loading = false;
      validateResponse(state, action);
    },
    [calculateFertilizer.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.messageError = action?.error?.message;
      state.success = false;
      state.isCal = false;
    },
    // allFertilizer
    [allFertilizer.pending]: (state) => {
      state.loading = true;
    },
    [allFertilizer.fulfilled]: (state, action) => {
      state.loading = false;
      validateFetchResponse(state, action);
    },
    [allFertilizer.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.messageError = action?.error?.message;
      state.success = false;
    },
    //allSeeds
    [allSeeds.pending]: (state) => {
      state.loading = true;
    },
    [allSeeds.fulfilled]: (state, action) => {
      state.loading = false;
      validateFetchResponse(state, action);
    },
    [allSeeds.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.messageError = action?.error?.message;
      state.success = false;
    },
    // allLands
    [allLands.pending]: (state) => {
      state.loading = true;
    },
    [allLands.fulfilled]: (state, action) => {
      state.loading = false;
      validateFetchResponse(state, action);
    },
    [allLands.rejected]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.messageError = null;
      state.success = false;
      console.log(action?.error?.message);
    },
    // handle iscal
    [setIsCal]: (state, action) => {
      state.isCal = action.payload;
    },
    //set order request data
    [setOrderRequest]: (state, action) => {
      state.orderRequest = action.payload;
    },
  },
});
export { orderInitalState };
export default orderDetails.reducer;
