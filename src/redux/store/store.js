import { applyMiddleware, createStore } from "redux";
import { postsReducer } from "../reducers/postReducer";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const middleWares = [reduxThunk];
const middleWareEnhancers = applyMiddleware(...middleWares);
const store = createStore(
  postsReducer,
  composeWithDevTools(middleWareEnhancers)
);

export default store;
