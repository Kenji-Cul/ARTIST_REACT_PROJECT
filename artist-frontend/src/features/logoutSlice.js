import { createSlice } from "@reduxjs/toolkit";

export const logoutSlice = createSlice({
     name: "logout",
     initialState: {
        token: "",
        userInfo: null,
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMsg: "",
    },
    reducers: {
        logOut: (state) => {
            localStorage.removeItem('userToken')
            localStorage.removeItem('userdetails')
            
        }

    },
})

export const { logOut } = logoutSlice.actions;

export const logoutSelector = (state) => state.logout;

export default logoutSlice.reducer;