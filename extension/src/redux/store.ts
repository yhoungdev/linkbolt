import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { linkReducer } from "./slice/linkSlice";
import { authReducer } from "./slice/authSlice";
import { profileReducer } from "./slice/userProfileSlice";

const rootReducer = combineReducers({
  links: linkReducer,
  auth: authReducer,
  profile: profileReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
