import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to local storage for web

import rootReducer from "../redux/rootReducer";
import { reduxLogger } from "../redux/logger/looger";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const FarmerStore = configureStore({
  reducer: { app: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
});
export const persistor = persistStore(FarmerStore);
export default FarmerStore;
