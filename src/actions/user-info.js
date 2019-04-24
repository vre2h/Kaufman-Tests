import { SET_FATHERNAME, SET_FNAME, SET_LNAME } from "./constants";

export const setFname = fname => ({
  type: SET_FNAME,
  payload: {
    fname
  }
});

export const setLname = lname => ({
  type: SET_LNAME,
  payload: {
    lname
  }
});

export const setFathername = fatherName => ({
  type: SET_FATHERNAME,
  payload: {
    fatherName
  }
});
