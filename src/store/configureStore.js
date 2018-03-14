import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { testReducer } from "../reducers/testReducer";
import { createLogger } from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

export default () => {
  const store = createStore(
    combineReducers({
      test: testReducer
    }),
    composeEnhancers(applyMiddleware(thunk, ...middleware))
  );

  return store;
};
