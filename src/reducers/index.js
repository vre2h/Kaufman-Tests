import { combineReducers } from "redux";

import userInfo from "./user-info";
import conceptualThinking from "./ct";
import patternReasoning from "./pr";

export default combineReducers({
  userInfo,
  conceptualThinking,
  patternReasoning
});
