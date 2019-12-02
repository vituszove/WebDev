import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; //Redux dev tools in browser
import thunk from "redux-thunk"; //middleware
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
