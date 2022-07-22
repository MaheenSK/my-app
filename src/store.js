import {configureStore} from "@reduxjs/toolkit";
import todoReducers from "./redux/reducers/todoReducers";
import { combineReducers } from "redux";
const reducer = combineReducers({ todoReducers})
const store = configureStore({
    reducer, 
})
export default store;



