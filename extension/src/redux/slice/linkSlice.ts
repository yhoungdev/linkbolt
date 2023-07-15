import { createSlice } from "@reduxjs/toolkit";

const linkSlice = createSlice({
    name: "link_slice",
    initialState: {
        user_links: []
    }, 
    reducers: {
        updateUserLink: ( state:any , action ) => {
            state.user_links = action.payload
        }
    }
})

export const linkReducer = linkSlice.reducer; 
export const { updateUserLink } = linkSlice.actions; 

