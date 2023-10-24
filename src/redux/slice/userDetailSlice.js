import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headerOptions } from "../../utils/utils";

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
    error: null,
    loginRequest: {},
    loginUser: {},
  },
  extraReducers: {
    [requestAuthentication.pending]: (state) => {
      state.loading = true;
    },
    [requestAuthentication.fulfilled]: (state, action) => {
      console.log(JSON.stringify(action));
      state.loading = false;
      state.loginUser = action.payload;
    },
    [requestAuthentication.rejected]: (state, action) => {
      console.log(JSON.stringify(action));

      state.loading = false;
      state.loginUser = action.payload;
      state.error = action.payload;
    },
  },
});

export default userDetails.reducer;
