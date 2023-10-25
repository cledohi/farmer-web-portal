import { createSlice } from "@reduxjs/toolkit";
const orderInitalState = {
  orders: [],
  loading: false,
  error: null,
  order: {},
  user: {},
  calculator: {},
};
export const orderDetails = createSlice({
  name: "orderDetail",
  initialState: orderInitalState,
});
export { orderInitalState };
export default orderDetails.reducer;
