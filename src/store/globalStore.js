import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice";

// Create global store useing reducer
const store = configureStore({
    reducer: counterSlice.reducer
})

export default store