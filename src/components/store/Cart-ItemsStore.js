import { createSlice } from "@reduxjs/toolkit";

const cartItemState = { items: [], totalQuantity: 0 };

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: cartItemState,
  reducers: {
    addItemHandler(currState, actions) {
      const addItem = actions.payload;
      const existingItem = currState.items.find(
        (item) => item.id === addItem.id
      );
      currState.totalQuantity++;
      if (!existingItem) {
        currState.items.push({
          id: addItem.id,
          title: addItem.title,
          price: addItem.price,
          quantity: 1,
          totalPrice: addItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + addItem.price;
      }
    },
    removeItemHandler(currState, actions) {
      const id = actions.payload;
      const existingItem = currState.items.find((item) => item.id === id);
      currState.totalQuantity--;
      if (existingItem.quantity === 1) {
        currState.items = currState.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartItemAction = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
