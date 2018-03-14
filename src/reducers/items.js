import { combineReducers } from "redux";
import { GET_ITEMS } from "../constants/ActionTypes";
import _ from "lodash";

const items = (state = {}, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        ...action.items.reduce((obj, item) => {
          obj[product.id] = item;
          return obj;
        }, {})
      };
    default:
      const { itemId } = action;
      if (itemId) {
        return {
          ...state,
          [itemId]: items(state[itemId], action)
        };
      }
      return state;
  }
};
