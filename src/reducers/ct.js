import { combineReducers } from "redux";

import { SET_CT_ITEM, DROP_CT, SET_CT_ITEM_TIME } from "../actions/constants";
import initialState from "../tests/test-1/test-1";

const tests = (state = initialState, action) => {
  switch (action.type) {
    case SET_CT_ITEM:
      return {
        ...state,
        [action.payload.itemId]: {
          ...state[action.payload.itemId],
          answered: action.payload.answerId + 1,
          delta:
            (action.payload.endTime.getTime() -
              action.payload.startTime.getTime()) /
            1000
        }
      };
    case SET_CT_ITEM_TIME:
      return {
        ...state,
        [action.payload.itemId]: {
          ...state[action.payload.itemId],
          startTime: action.payload.startTime
        }
      };
    case DROP_CT:
      return initialState;
    default:
      return state;
  }
};

const finished = (state = false, action) => {
  switch (action.type) {
    case SET_CT_ITEM:
      return action.payload.itemId === action.payload.testsLength;
    case DROP_CT:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  finished,
  tests
});
