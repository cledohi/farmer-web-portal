import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import createApiInstance from "../../utils/apiFetch";

export const updatePageable = createAction("pageable");
export const filterData = createAction("filterData");

export const handelApproveOrder = (e, data, dispatch) => {
  dispatch(approveOrRejectOrder({ id: data.orderId, status: "APPROVED" }));
};
export const handelRejectOrder = (e, data, dispatch) => {
  dispatch(approveOrRejectOrder({ id: data.orderId, status: "REJECTED" }));
};

export const approveOrRejectOrder = createAsyncThunk(
  "approveOrRejectOrder",
  async (data, { rejectWithValue, getState, dispatch }) => {
    const { id, status } = data;
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
    const resp = await apiCall.get(
      `/orders/approveOrRejectOrder?id=${id}&status=${status}`
    );
    try {
      const output = await resp.data;
      dispatch(getAllOrders({ size: 20, page: 0 }));
      return output;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getAllOrderByUserName = createAsyncThunk(
  "allOrderByUsername",
  async (data, { rejectWithValue, getState, dispatch }) => {
    dispatch(updatePageable(data));
    console.log(data);
    const {
      app: {
        user: {
          loginUser: {
            data: {
              token,
              user: { username },
            },
          },
        },
      },
    } = getState();
    console.log(username);
    const apiCall = createApiInstance(token);
    const resp = await apiCall.get(
      `/orders/allByUserName?username=${username}`
    );
    try {
      const output = await resp.data;
      return output;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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
      switch (action.type) {
        case "allOrderByUsername/fulfilled":
          state.data = data;
          state.filteredData = data;
          break;
        default:
          state.data = data?.content;
          state.filteredData = data?.content;
          break;
      }
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
