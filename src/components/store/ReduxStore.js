import { configureStore } from "@reduxjs/toolkit";
import CartShowReducers from "./CartShowStore";
import CartItemReducer from "./Cart-ItemsStore";

const store = configureStore({
  reducer: { cartVisible: CartShowReducers, cart: CartItemReducer },
});

export default store;
