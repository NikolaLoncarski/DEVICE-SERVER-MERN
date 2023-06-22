import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/userAuthSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
