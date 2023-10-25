import { createAsyncThunk } from "@reduxjs/toolkit";
import createApiInstance from "../../utils/apiFetch";
export const allFertilizer = createAsyncThunk(
  "allFertilizer",
  async (data, { rejectWithValue, getState }) => {
    const { page, size } = data;
    const state = getState();
    const {
      app: {
        user: {
          loginUser: {
            data: { token },
          },
        },
      },
    } = state;
    const api = createApiInstance(token);
    const response = await api.get(`/fertilizer/all?page=${page}&size=${size}`);
    try {
      const output = await response.data;
      return output;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const validateFetchResponse = (state, action) => {
  const payload = action?.payload;
  if (payload) {
    const { status, message, data } = payload;
    if (status === 200) {
      const { content } = data;
      state.success = true;
      switch (action.type) {
        case "allFertilizer/fulfilled":
          state.fertilizers = content;
          break;
        default:
          console.log("no action");
      }
    } else {
      state.error = true;
      state.messageError = message;
      state.success = false;
    }
  } else {
    state.error = true;
    state.messageError = null;
    state.success = false;
  }
};
