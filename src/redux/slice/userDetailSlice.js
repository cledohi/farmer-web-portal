import { createSlice } from "@reduxjs/toolkit";
import {
  requestAuthoService,
  validateResponse,
} from "../actions/AuthenticationService";
import { createFarmerAccount } from "../actions/RegisterFarmerActionService";
const userInitalState = {
  users: [],
  loading: false,
  error: false,
  isToken: false,
  messageError: null,
  loginRequest: {},
  loginUser: {},
  success: false,
};

export const userDetails = createSlice({
  name: "userDetail",
  initialState: userInitalState,
  extraReducers: {
    [requestAuthoService.pending]: (state) => {
      state.loading = true;
    },
    [requestAuthoService.fulfilled]: (state, action) => {
      state.loading = false;
      validateResponse(state, action);
    },
    [requestAuthoService.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.messageError = null;
      state.success = false;
    },
    // account creation handle
    [createFarmerAccount.pending]: (state) => {
      state.loading = true;
    },
    [createFarmerAccount.fulfilled]: (state, action) => {
      state.loading = false;
      validateResponse(state, action);
    },

    [createFarmerAccount.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.messageError = action?.error?.message;
      state.success = false;
    },
    // assign land to a farmer  assignLandToFarmer

    [assignLandToFarmer.pending]: (state) => {
      state.loading = true;
    },
    [assignLandToFarmer.fulfilled]: (state, action) => {
      state.loading = false;
      validateResponse(state, action);
    },

    [assignLandToFarmer.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.messageError = action?.error?.message;
      state.success = false;
    },
  },
});

export { userInitalState };
export default userDetails.reducer;
