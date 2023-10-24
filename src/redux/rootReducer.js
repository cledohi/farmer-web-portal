import { combineReducers } from "@reduxjs/toolkit";
import { userDetails } from "./slice/userDetailSlice";
import { orderDetails } from "./slice/orderSlice";

const rootReducer = combineReducers({
  user: userDetails.reducer,
  order: orderDetails.reducer,
});
export default rootReducer;
