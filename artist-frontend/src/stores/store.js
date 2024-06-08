import  { configureStore  } from  '@reduxjs/toolkit';
import dataSlice from '../features/dataSlice';
import signupSlice  from '../features/signupSlice';
import loginSlice from '../features/loginSlice';


export const store = configureStore({
    reducer: {
      data: dataSlice,
      signup: signupSlice,
      login: loginSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          immutableCheck: false,
          serializableCheck: false
      })
  });