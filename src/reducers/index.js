import { combineReducers } from "redux";

import userInfo from "./user-info";
import conceptualThinking from "./tests";

export default combineReducers({
  userInfo,
  conceptualThinking
});
