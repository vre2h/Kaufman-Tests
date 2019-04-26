import { SET_CT_ITEM } from "./constants";

export const setCTTestItem = ({ itemId, answerId, testsLength }) => ({
  type: SET_CT_ITEM,
  payload: {
    itemId,
    answerId,
    testsLength
  }
});
