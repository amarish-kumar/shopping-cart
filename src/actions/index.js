import items from "../api/items";
import * as types from "../constants/ActionTypes";

const getItems = products => ({
  type: types.GET_ITEMS,
  items
});
