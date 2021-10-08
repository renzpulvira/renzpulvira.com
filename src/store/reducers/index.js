import { combineReducers } from "redux";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  themeToggle: themeReducer,
});

export default rootReducer;
