import Reducer from "./reducers/Index.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: Reducer });

export default store;