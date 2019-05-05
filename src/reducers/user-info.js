import { combineReducers } from "redux";
import {
  SET_FNAME,
  SET_LNAME,
  SET_FATHERNAME,
  SET_EMAIL,
  SET_BIRTHDAY,
  SET_ADDITIONAL_INFO,
  SET_PHONE_NUMBER
} from "../actions/constants";

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

const email = (state = "", action) => {
  switch (action.type) {
    case SET_EMAIL:
      return action.payload.email;
    default:
      return state;
  }
};

const birthday = (state = "", action) => {
  switch (action.type) {
    case SET_BIRTHDAY:
      return action.payload.birthday;
    default:
      return state;
  }
};

const additionalInfo = (state = "", action) => {
  switch (action.type) {
    case SET_ADDITIONAL_INFO:
      return action.payload.additionalInfo;
    default:
      return state;
  }
};

const phoneNumber = (state = "", action) => {
  switch (action.type) {
    case SET_PHONE_NUMBER:
      return action.payload.phoneNumber;
    default:
      return state;
  }
};

export default combineReducers({
  fatherName,
  fname,
  lname,
  email,
  birthday,
  additionalInfo,
  phoneNumber
});
