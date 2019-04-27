import { combineReducers } from "redux";

import userInfo from "./user-info";
import conceptualThinking from "./ct";
import pr from "./pr";

export default combineReducers({
  userInfo,
  conceptualThinking,
  pr
});
