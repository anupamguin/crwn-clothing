import {
  ADD_ITEM,
  REMOVE_ITEM,
  TOGGLE_CART_HIDDEN,
  CLEAR_ITEM_FROM_CART,
} from "./cart.types";

export const toogleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});
