import  { configureStore  } from  '@reduxjs/toolkit';
import dataSlice from '../features/dataSlice';
import signupSlice  from '../features/signupSlice';


export const store = configureStore({
    reducer: {
      data: dataSlice,
      signup: signupSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          immutableCheck: false,
          serializableCheck: false
      })
  });