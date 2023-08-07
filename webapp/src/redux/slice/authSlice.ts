import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth_slice",
  initialState: {
    auth_jwt: "",
  },
  reducers: {
    updateToken: function (state, action) {
      state.auth_jwt = action.payload;
    },
  },
});

export const authReducer = auth.reducer;
export const { updateToken } = auth.actions;
