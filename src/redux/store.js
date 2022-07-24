import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'; 
import taskReducer from './taskSlice'; 
export default configureStore(
    {
        reducer:{
            todos:todoReducer,
            tasks:taskReducer,
        },
    }
);