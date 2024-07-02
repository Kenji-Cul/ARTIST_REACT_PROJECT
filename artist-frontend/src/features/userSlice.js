import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser = createAsyncThunk("artist/update", async({description,file,user_id,fname,username,userlocation,usernumber,profile}, thunkAPI) => {

    try {
       let link = `http://localhost:5000/artist/${user_id}`;
        // console.log(profile);
        
  
       const params = {
        desc: description,
        myfile: file,
        name: fname,
        username: username,
        location: userlocation,
        number: usernumber,
    };


    const response = await axios.put(link, params, {
        headers: { Accept: 'application/json',
            'Content-Type': 'multipart/form-data',}
    });
     
     let data = await response.data;
     if(response.status === 200){
        // console.log(data);
        return data;
     } 
     else {
        // console.log(data);
        return data;
     }

    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.response.data);
    }
})

export const getUser = createAsyncThunk("/artist/getuser", async(thunkAPI) => {
    try {
        let user = localStorage.getItem("userdetails");
        let userdata = JSON.parse(user);
       
        let link = `http://localhost:5000/artists/${userdata.id}`;
     
        const response = await axios.get(link, {
            headers: { "Content-Type": "application/json"}
         });
         
         let data = await response.data;
         if(response.status === 200){
    
            
            return data;
         } 
         else {
            console.log(data);
            return data;
         }
        
    } catch (e) {
        console.log(e.response.data);
        return thunkAPI.rejectWithValue(e.response.data);
       
    }
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMsg: "",
        userInfo: null,
        isSuccessUser: false,
        isFetchingUser: false,
        isErrorUser: false,
        errorMsgUser: "",
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
        .addCase(updateUser.fulfilled, (state, { payload }) => {
            
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        }) 
        .addCase(updateUser.rejected, (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
        })
        .addCase(updateUser.pending, (state) => {
            state.isFetching = true;
        })

        .addCase(getUser.fulfilled, (state, { payload }) => {
             state.userInfo = payload;
            state.isFetchingUser = false;
            state.isSuccessUser = true;
            return state;
        }) 
        .addCase(getUser.rejected, (state, { payload }) => {
            state.isFetchingUser = false;
            state.isErrorUser = true;
        })
        .addCase(getUser.pending, (state) => {
            state.isFetchingUser = true;
        })
    }
})

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice.reducer;