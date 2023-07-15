import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { linkReducer } from "./slice/linkSlice";

const rootReducer = combineReducers({
    links: linkReducer
})

export const store = configureStore({
    reducer: rootReducer
})