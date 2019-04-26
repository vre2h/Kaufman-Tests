import { SET_CT_ITEM, SET_PR_ITEM, DROP_PR, DROP_CT } from "./constants";

export const setCTTestItem = ({ itemId, answerId, testsLength }) => ({
  type: SET_CT_ITEM,
  payload: {
    itemId,
    answerId,
    testsLength
  }
});

export const setPRTestItem = ({ itemId, answerId, testsLength }) => ({
  type: SET_PR_ITEM,
  payload: {
    itemId,
    answerId,
    testsLength
  }
});

export const dropPR = () => ({
  type: DROP_PR
});

export const dropCT = () => ({
  type: DROP_CT
});
