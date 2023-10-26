import { baseUrl } from "../../utils/baseUrl";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import createApiInstance from "../../utils/apiFetch";

export const updatePageable = createAction("pageable");

export const getAllOrders = createAsyncThunk(
  "getAllOrders",
  async (data, { rejectWithValue, getState, dispatch }) => {
    dispatch(updatePageable(data));
    const { size, page } = data;
    const {
      app: {
        user: {
          loginUser: {
            data: { token },
          },
        },
      },
    } = getState();

    const apiCall = createApiInstance(token);
    const resp = await apiCall.get(`/orders/all?size=${size}&page=${page}`);
    try {
      const output = await resp.data;
      return output;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handelDatTableResults = (state, action) => {
  const payload = action?.payload;
  if (payload) {
    const { status, message, data } = payload;
    if (status === 200) {
      state.success = true;
      state.error = false;
      state.messageError = null;
      state.data = data?.content;
    } else {
      state.error = true;
      state.success = false;
      state.messageError = message;
      state.success = false;
    }
  } else {
    state.error = false;
    state.messageError = null;
    state.success = false;
  }
};
