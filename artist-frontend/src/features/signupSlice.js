import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser = createAsyncThunk("artists/register", async({name, location, email, phone, password}, thunkAPI) => {
      try {
         let link = "http://localhost:3000/signup";
         const params = {
             name: name,
             location: location,
             email: email,
             phone: phone,
             password: password
         };

         const response = await axios.post(link, params, {
            headers: {"Content-Type": "application/json"}
         });
         
         let data = await response.data;
         if(response.status === 200){
            // localStorage.setItem("token", data.token);
            // console.log(data);
            return data;
         } 
         else {
            // return thunkAPI.rejectWithValue(data);
            return data;
         }
      }

       catch {
          console.log("Error", e.response.data);
          return e.response.data;
       }
});

export const signupSlice = createSlice({
    name: "signup",
    initialState: {
        token: "",
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
    extraReducers: (builder) => {
        builder
        .addCase(signupUser.fulfilled, (state, { payload }) => {
            console.log(payload);
            
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        }) 
        .addCase(signupUser.rejected, (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
        })
        .addCase(signupUser.pending, (state) => {
            state.isFetching = true;
        })
    }
})

export const { clearState } = signupSlice.actions;

export const signupSelector = (state) => state.signup;

export default signupSlice.reducer;

