import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser = createAsyncThunk("", async({desc, file}, thunkAPI) => {
    try {
       let link = "http://localhost:3000/updatedetails";
       const params = {
        desc: desc,
        file: file.name,
    };

    
    const response = await axios.post(link, params, {
        headers: {"Content-Type": "application/json"}
     });
     
     let data = await response.data;
     if(response.status === 200){
        return data;
     } 
     else {
        return data;
     }

    }
    catch (e) {
        console.log("Error", e.response.data);
        return e.response.data;
    }
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMsg: ""
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;

            return state;
        }
    },
    extraReducers: () => {
        
    }
})

export const userSelector = (state) => state.user;

export default userSlice.reducer;