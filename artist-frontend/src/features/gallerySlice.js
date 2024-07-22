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

export const updateGallery = createAsyncThunk("artist/updategallery", async({galleryname,fname,user_id,file}, thunkAPI) => {

    try {
       let link = `http://localhost:5000/artistgallery/update/${user_id}`;
        // console.log(profile);
        
       const params = {
        name: galleryname,
        myfile: file,
        imgname: fname,
    };
   


    const response = await axios.put(link, params, {
        headers: { Accept: 'application/json',
            'Content-Type': 'multipart/form-data',}
    });
     
     let data = await response.data;
     if(response.status === 200){
        console.log(data);
        return data;
     } 
     else {
        console.log(data);
        return data;
     }

    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.response.data);
    }
})

export const getUserGallery = createAsyncThunk("artist/getgallery", async(thunkAPI) => {

    try {
        let user = localStorage.getItem("userdetails");
        let userdata = JSON.parse(user);
       let link = `http://localhost:5000/artists/gallery/${userdata.id}`;
        // console.log(profile);


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
        galleryInfo: null,
        gallerySuccess: false,
        galleryFetching: false,
        galleryError: false,
        updateSuccess: false,
        updateFetching: false,
        updateError: false,
        updateInfo: null,
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

        .addCase(getUserGallery.fulfilled, (state, { payload }) => {
            state.galleryInfo = payload;
            state.galleryFetching = false;
            state.gallerySuccess = true;
            return state;
        })  
        .addCase(getUserGallery.rejected, (state, { payload }) => {
            state.galleryFetching = false;
            state.galleryError = true;
            state.errorMsg = payload.message;
        })
        .addCase(getUserGallery.pending, (state) => {
            state.galleryFetching = true;
        })

        .addCase(updateGallery.fulfilled, (state, { payload }) => {
            
            state.updateFetching = false;
            state.updateSuccess = true;
            state.updateInfo = payload.message;
            return state;
        }) 
        .addCase(updateGallery.rejected, (state, { payload }) => {
            state.updateFetching = false;
            state.updateError = true;
            state.updateError = payload.message;
        })
        .addCase(updateGallery.pending, (state) => {
            state.updateFetching = true;
        })
    }
})

export const { clearState } = gallerySlice.actions;

export const gallerySelector = (state) => state.gallery;

export default gallerySlice.reducer;