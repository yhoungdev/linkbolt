import { createSlice } from "@reduxjs/toolkit";

const linkSlice = createSlice({
  name: "link_slice",
  initialState: {
    user_links: [],
    user_total_links: 0,
    isDeleteId: {}
  },
  reducers: {
    updateUserLink: (state: any, action) => {
      state.user_links = action.payload;
    },
    updateUserTotalLinks: (state, action) => {
      state.user_total_links = action.payload;
    },

    updateDelete: (state, action) => {
      state.isDeleteId = action.payload;
    },
  },
});

export const linkReducer = linkSlice.reducer;
export const { updateUserLink, updateUserTotalLinks , updateDelete } = linkSlice.actions;
