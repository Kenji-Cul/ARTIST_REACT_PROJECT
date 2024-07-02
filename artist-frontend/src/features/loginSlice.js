import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("artists/login", async({email, password}, thunkAPI) => {
    try {
       const params = {
        email: email,
        password: password,
       };

       let link = "http://localhost:5000/login";
       const response = await axios.post(link, params, {
           headers: {"Content-Type": "application/json"}
       });

    //    console.log(re);
    if(response.status == 200){
        const date = new Date().setDate(new Date().getDate() + 10);
        // const date = new Date().setSeconds(240);
        // console.log(new Date(date));
          
        let tokendata = {
            value: response.data.accessToken,
            expDate: date,
        }

       
        localStorage.setItem('userToken', JSON.stringify(tokendata))


        // localStorage.setItem('test-item', JSON.stringify({
        //   value: "string",
        //   expDate: date,
        // }))
        // localStorage.setItem('userToken', response.data.accessToken);
        localStorage.setItem('userdetails', JSON.stringify(response.data.user));
       return response.data;
    } else {
        return response.data;
    }
        
       
    }
    catch(e) {
        //console.log("Error", e.response.data);
        return thunkAPI.rejectWithValue(e.response.data);
    }
})

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        token: "",
        userInfo: null,
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMsg: "",
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
        .addCase(loginUser.fulfilled, (state, { payload }) => {
            // console.log(payload);
            state.token = payload.accessToken;
            state.userInfo = payload.user;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        })
        .addCase(loginUser.rejected, (state, { payload }) => {
             //console.log(payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMsg = payload;
        })
        .addCase(loginUser.pending, (state) => {
            state.isFetching = true;
        })
    }
})

export const { clearState } = loginSlice.actions;

export const loginSelector = (state) => state.login;

export default loginSlice.reducer;