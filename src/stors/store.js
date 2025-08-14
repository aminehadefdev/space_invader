import { configureStore } from '@reduxjs/toolkit';
import slice from "./slice"

const store = configureStore({
  reducer: {
    App: slice
  }
});

export default store