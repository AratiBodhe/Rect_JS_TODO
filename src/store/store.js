import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../actions/todoSlice'
const store=configureStore({
    reducer:{
        todod:todoReducer
    }
});
export default store;