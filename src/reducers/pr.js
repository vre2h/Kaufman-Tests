import { combineReducers } from "redux";

import { SET_PR_ITEM, DROP_PR, SET_PR_ITEM_TIME } from "../actions/constants";
import initialState from "../tests/test-2/test-2";

const tests = (state = initialState, action) => {
  switch (action.type) {
    case SET_PR_ITEM:
      return {
        ...state,
        [action.payload.itemId]: {
          ...state[action.payload.itemId],
          answered: action.payload.answerId,
          delta:
            (action.payload.endTime.getTime() -
              action.payload.startTime.getTime()) /
            1000,
          data: action.payload.data
        }
      };
    case SET_PR_ITEM_TIME:
      return {
        ...state,
        [action.payload.itemId]: {
          ...state[action.payload.itemId],
          startTime: action.payload.startTime
        }
      };
    case DROP_PR:
      return initialState;
    default:
      return state;
  }
};

const finished = (state = false, action) => {
  switch (action.type) {
    case SET_PR_ITEM:
      return action.payload.itemId === action.payload.testsLength;
    case DROP_PR:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  finished,
  tests
});
