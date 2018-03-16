import { combineReducers } from "redux";
import { GET_ITEMS, DELETE_ITEM } from "../constants/ActionTypes";

const items = (state = {}, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        ...action.items.reduce((obj, item) => {
          obj[item.id] = item;
          return obj;
        }, {})
      };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        ...action.items.reduce((obj, item) => {
          obj[item.id] = item;
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

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case GET_ITEMS:
      return action.items.map(item => item.id);
    case DELETE_ITEM:
      const { itemId } = action;
      state = state.filter(item => {
        return item !== itemId;
      });
      return [...state];
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds
});

export const getItem = (state, id) => state.byId[id];

export const getVisibleItems = state =>
  state.visibleIds.map(id => getItem(state, id));
