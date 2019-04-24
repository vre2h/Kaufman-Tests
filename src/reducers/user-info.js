import { combineReducers } from "redux";
import { SET_FNAME, SET_LNAME, SET_FATHERNAME } from "../actions/constants";

const fname = (state = "", action) => {
  switch (action.type) {
    case SET_FNAME:
      return action.payload.fname;
    default:
      return state;
  }
};

const lname = (state = "", action) => {
  switch (action.type) {
    case SET_LNAME:
      return action.payload.lname;
    default:
      return state;
  }
};

const fatherName = (state = "", action) => {
  switch (action.type) {
    case SET_FATHERNAME:
      return action.payload.fatherName;
    default:
      return state;
  }
};

export default combineReducers({
  fatherName,
  fname,
  lname
});
