import { createSlice } from "@reduxjs/toolkit";
import { calculateFertilizer } from "../actions/CalculatorAction";
import { validateResponse } from "../actions/AuthenticationService";
import {
  allFertilizer,
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
  Lands: [],
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
  },
});
export { orderInitalState };
export default orderDetails.reducer;
