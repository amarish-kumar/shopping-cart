import item from "../api/items";
import * as types from "../constants/ActionTypes";

const TIMEOUT = 100;

const Items = callback => {
  setTimeout(() => callback(item), TIMEOUT);
};

const getItems = items => ({
  type: types.GET_ITEMS,
  items
});

export const getAllItems = () => dispatch => {
  Items(items => {
    dispatch(getItems(items));
  });
};

// const addToCartUnsafe = productId => ({
//   type: types.ADD_TO_CART,
//   productId
// });
//
// export const addToCart = productId => (dispatch, getState) => {
//   if (getState().products.byId[productId].inventory > 0) {
//     dispatch(addToCartUnsafe(productId));
//   }
// };
