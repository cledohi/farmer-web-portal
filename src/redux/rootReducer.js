import { combineReducers } from "@reduxjs/toolkit";
import { userDetails } from "./slice/userDetailSlice";
import { orderDetails } from "./slice/orderSlice";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { dataTableInformation } from "./slice/dataTableSlice";
const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  user: userDetails.reducer,
  order: orderDetails.reducer,
  dataTable: dataTableInformation.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const appReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    // Clear the state and storage on logout
    state = {};
    storage.removeItem("persist:root");
  }

  return persistedReducer(state, action);
};

export default appReducer;
