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
export const allSeeds = createAsyncThunk(
  "allSeeds",
  async (data, { rejectWithValue, getState }) => {
    const { page, size } = data;
    const mystate = getState();
    const {
      app: {
        user: {
          loginUser: {
            data: { token },
          },
        },
      },
    } = mystate;
    const apiCall = createApiInstance(token);
    const resp = await apiCall.get(`/seeds/all?page=${page}&size=${size}`);
    try {
      const output = await resp.data;
      return output;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const allLands = createAsyncThunk(
  "allLands",
  async (data, { rejectWithValue, getState }) => {
    const { username } = data;
    const mystate = getState();
    const {
      app: {
        user: {
          loginUser: {
            data: { token },
          },
        },
      },
    } = mystate;
    const apiCall = createApiInstance(token);
    const resp = await apiCall.get(
      `/farmer/landsByUsername?username=${username}`
    );
    try {
      const output = await resp.data;
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
    console.log(`error message found ${message}`);
    if (status === 200) {
      state.success = false;
      state.error = false;
      state.messageError = null;
      state.success = false;
      switch (action.type) {
        case "allFertilizer/fulfilled":
          state.fertilizers = data?.content;
          break;
        case "allSeeds/fulfilled":
          state.seeds = data?.content;
          break;
        case "allLands/fulfilled":
          state.lands = data;
          break;
        default:
          console.log("no action");
          break;
      }
    } else {
      state.error = false;
      state.messageError = null;
      state.success = false;
    }
  } else {
    state.error = false;
    state.messageError = null;
    state.success = false;
  }
};
