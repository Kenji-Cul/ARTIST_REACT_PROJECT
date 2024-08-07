import  { configureStore  } from  '@reduxjs/toolkit';
import dataSlice from '../features/dataSlice';
import signupSlice  from '../features/signupSlice';
import loginSlice from '../features/loginSlice';
import logoutSlice from '../features/logoutSlice';
import userSlice from '../features/userSlice';
import gallerySlice from '../features/gallerySlice';


export const store = configureStore({
    reducer: {
      data: dataSlice,
      signup: signupSlice,
      login: loginSlice,
      logout: logoutSlice,
      user: userSlice,
      gallery: gallerySlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          immutableCheck: false,
          serializableCheck: false
      })
  });