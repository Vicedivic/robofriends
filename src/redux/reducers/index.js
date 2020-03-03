import { combineReducers } from "redux";
import searchReducer from "./search";
import robotReducer from "./robot";

export default combineReducers({
  search: searchReducer,
  robot: robotReducer
});
