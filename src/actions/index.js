import item from "../api/items";
import * as types from "../constants/ActionTypes";

const TIMEOUT = 100;

const Items = callback => {
  setTimeout(() => callback(item), TIMEOUT);
};

export const getItems = items => ({
  type: types.GET_ITEMS,
  items
});

export const getAllItems = () => dispatch => {
  Items(items => {
    dispatch(getItems(items));
  });
};

const addToCartUnsafe = itemId => ({
  type: types.ADD_TO_CART,
  itemId
});

export const addToCart = itemId => dispatch => {
  dispatch(addToCartUnsafe(itemId));
};

const deleteFromCartUnsafe = itemId => ({
  type: types.DELETE_FROM_CART,
  itemId
});

export const deleteFromCart = itemId => dispatch => {
  dispatch(deleteFromCartUnsafe(itemId));
};

const deleteItemUnsafe = itemId => ({
  type: types.DELETE_ITEM,
  itemId
});

export const deleteItem = itemId => dispatch => {
  dispatch(deleteItemUnsafe(itemId));
};
