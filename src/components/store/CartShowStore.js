import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  showCart: false,
};

const cartSlice = createSlice({
  name: "cartShow",
  initialState: initialCartState,
  reducers: {
    showCartHandler(prevState, action) {
      prevState.showCart = !prevState.showCart;
    },
  },
});

export const cartShowActions = cartSlice.actions;
export default cartSlice.reducer;
