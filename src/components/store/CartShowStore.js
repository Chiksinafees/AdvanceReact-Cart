import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  showCart: false,
  Notification: null,
};

const cartSlice = createSlice({
  name: "cartShow",
  initialState: initialCartState,
  reducers: {
    showCartHandler(prevState) {
      prevState.showCart = !prevState.showCart;
    },
    showNotification(prevState, action) {
      prevState.Notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartShowActions = cartSlice.actions;
export default cartSlice.reducer;
