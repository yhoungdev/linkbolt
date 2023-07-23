import { createSlice } from "@reduxjs/toolkit";

interface IProfile {
  profileData: any;
}

const profileState = {
  profileData: 0,
};

const profile = createSlice({
  name: "user_profile",
  initialState: profileState,
  reducers: {
    updateProfileState: (state, payload) => {
      state.profileData = payload.payload;
    },
  },
});

export const profileReducer = profile.reducer;
export const { updateProfileState } = profile.actions;
