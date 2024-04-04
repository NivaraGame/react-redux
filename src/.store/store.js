import { combineReducers, createStore } from "redux";
import initialState from "./initialState";
import reducerMeow from "./Cats/catStore";
import reducerDog from "./Dogs/dogStore";

const reducer = combineReducers({
  reducerMeow: reducerMeow,
  reducerDog: reducerDog,
});

const store = createStore(reducer, initialState);

export default store;
