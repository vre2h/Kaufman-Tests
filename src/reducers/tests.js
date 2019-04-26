import { combineReducers } from "redux";

import { SET_CT_ITEM } from "../actions/constants";
import initialState from "../tests/test-1/test-1";

const tests = (state = initialState, action) => {
  switch (action.type) {
    case SET_CT_ITEM:
      return {
        ...state,
        [action.payload.itemId]: {
          ...state[action.payload.itemId],
          answered: action.payload.answerId + 1
        }
      };
    default:
      return state;
  }
};

const finished = (state = false, action) => {
  switch (action.type) {
    case SET_CT_ITEM:
      return action.payload.itemId === action.payload.testsLength;
    default:
      return state;
  }
};

export default combineReducers({
  finished,
  tests
});
