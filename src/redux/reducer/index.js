import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import fetchApiSlice from "./fetchApiSlice";
const rootReducers = combineReducers({
    counter: counterReducer,
    fetchApi: fetchApiSlice
})
export default rootReducers;