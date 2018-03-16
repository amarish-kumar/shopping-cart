import { ADD_TO_CART, DELETE_FROM_CART } from "../constants/ActionTypes";

const initialState = {
  addedIds: [],
  quantityById: {}
};

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.itemId) !== -1) {
        return state;
      }
      return [...state, action.itemId];
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.itemId]: (state[action.itemId] || 0) + 1
      };
    case DELETE_FROM_CART:
      if (state[action.itemId] !== 0) {
        return {
          ...state,
          [action.itemId]: (state[action.itemId] || 0) - 1
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0;

export const getAddedIds = state => state.addedIds;

const cart = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      };
  }
};

export default cart;
