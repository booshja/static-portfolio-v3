/* eslint-disable */

// dependencies
import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from "@reduxjs/toolkit/query";
// import { booshjaApi } from '../services/booshjaAPI';
// state
// import CommerceSlice from "../slices/commerceSlice";
import themeSlice from './slices/themeSlice';

export default configureStore({
  reducer: {
    // [booshjaApi.reducerPath]: booshjaApi.reducer,
    theme: themeSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(booshjaApi.middleware),
});
