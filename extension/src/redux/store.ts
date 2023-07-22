import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { linkReducer } from "./slice/linkSlice";
import { authReducer } from "./slice/authSlice";

const rootReducer = combineReducers({
  links: linkReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
