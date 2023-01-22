import { configureStore } from "@reduxjs/toolkit";
import CartShowReducers from "./CartShowStore";

const store = configureStore({
  reducer: { cartVisible: CartShowReducers },
});

export default store;
