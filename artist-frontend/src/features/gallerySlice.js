import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const createGallery = createAsyncThunk("artist/creategallery", async({galleryname,fname,user_id,file}, thunkAPI) => {

    try {
       let link = `http://localhost:5000/creategallery/${user_id}`;
        // console.log(profile);
        
  
       const params = {
        name: galleryname,
        myfile: file,
        imgname: fname,
    };
    


    const response = await axios.post(link, params, {
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

export const gallerySlice = createSlice({
    name: "gallery",
    initialState: {
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
        .addCase(createGallery.fulfilled, (state, { payload }) => {
            
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        }) 
        .addCase(createGallery.rejected, (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
        })
        .addCase(createGallery.pending, (state) => {
            state.isFetching = true;
        })
    }
})

export const { clearState } = gallerySlice.actions;

export const gallerySelector = (state) => state.gallery;

export default gallerySlice.reducer;