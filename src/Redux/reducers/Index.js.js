import { combineReducers } from "@reduxjs/toolkit";
import StudentReducer from "./StudentReducers";

const Reducer = combineReducers({
  studentReducer: StudentReducer,
});

export default Reducer;