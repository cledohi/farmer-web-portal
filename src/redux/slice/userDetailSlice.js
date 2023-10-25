import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headerOptions } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
// Functions and exports

// actions
export const requestAuthentication = createAsyncThunk(
  "loginAction",
  async (data, { rejectWithValue }) => {
    const option = headerOptions({ data, method: "POST" });
    console.log(option);
    const url = `http://localhost:8182/authenticate`;
    const response = await fetch(url, option);
    try {
      const results = await response.json();
      return results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userDetails = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: false,
    messageError: null,
    loginRequest: {},
    loginUser: {},
    success: false,
  },
  extraReducers: {
    [requestAuthentication.pending]: (state) => {
      state.loading = true;
    },
    [requestAuthentication.fulfilled]: (state, action) => {
      state.loading = false;
      state.loginUser = action.payload;
      state.success = true;
    },
    [requestAuthentication.rejected]: (state, action) => {
      state.loading = false;
      state.messageError = action.payload;
      state.error = true;
      state.success = false;
    },
  },
});

export default userDetails.reducer;
