import { createSlice } from "@reduxjs/toolkit";
import { calculateFertilizer } from "../actions/CalculatorAction";
import { validateResponse } from "../actions/AuthenticationService";
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
  },
});
export { orderInitalState };
export default orderDetails.reducer;
