import { createSlice } from "@reduxjs/toolkit";

const cartItemState = { items: [], totalQuantity: 0, changed: false };

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: cartItemState,
  reducers: {
    getCartDataFromFirebase(prevState, actions) {
      prevState.items = actions.payload.items;
      prevState.totalQuantity = actions.payload.totalQuantity;
    },

    addItemHandler(prevState, actions) {
      const addItem = actions.payload;
      const existingItem = prevState.items.find(
        (item) => item.id === addItem.id
      );
      prevState.totalQuantity++;
      prevState.changed = true;
      if (!existingItem) {
        prevState.items.push({
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
    removeItemHandler(prevState, actions) {
      const id = actions.payload;
      const existingItem = prevState.items.find((item) => item.id === id);
      prevState.totalQuantity--;
      prevState.changed = true;
      if (existingItem.quantity === 1) {
        prevState.items = prevState.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartItemAction = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
