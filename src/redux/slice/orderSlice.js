import { createSlice } from "@reduxjs/toolkit";

export const orderDetails = createSlice({
  name: "orderDetail",
  initialState: {
    orders: [],
    loading: false,
    error: null,
    order: {},
    user: {},
    calculator: {},
  },
});

export default orderDetails.reducer;
