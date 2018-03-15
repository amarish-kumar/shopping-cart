import { combineReducers } from "redux";
import cart, * as fromCart from "./cart";
import items, * as fromItems from "./items";

export default combineReducers({
  cart,
  items
});
