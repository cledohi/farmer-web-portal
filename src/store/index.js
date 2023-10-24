import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/rootReducer";

const FarmerStore = configureStore({
  reducer: { app: rootReducer }, // Pass the rootReducer directly
});

export default FarmerStore;
