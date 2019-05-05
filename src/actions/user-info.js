import {
  SET_FATHERNAME,
  SET_FNAME,
  SET_LNAME,
  SET_EMAIL,
  SET_BIRTHDAY,
  SET_ADDITIONAL_INFO,
  SET_PHONE_NUMBER
} from "./constants";

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

export const setEmail = email => ({
  type: SET_EMAIL,
  payload: {
    email
  }
});

export const setAdditionalInfo = additionalInfo => ({
  type: SET_ADDITIONAL_INFO,
  payload: {
    additionalInfo
  }
});

export const setBirthday = birthday => ({
  type: SET_BIRTHDAY,
  payload: {
    birthday
  }
});

export const setPhoneNumber = phoneNumber => ({
  type: SET_PHONE_NUMBER,
  payload: {
    phoneNumber
  }
});
