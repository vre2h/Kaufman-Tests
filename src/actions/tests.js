import {
  SET_CT_ITEM,
  SET_PR_ITEM,
  DROP_PR,
  DROP_CT,
  SEND_RES,
  SEND_RES_FAILED,
  SEND_RES_SUCCESS,
  SET_CT_ITEM_TIME,
  SET_PR_ITEM_TIME
} from "./constants";
import { doPost } from "../api/request";

export const setCTTestItemTime = ({ itemId, time }) => ({
  type: SET_CT_ITEM_TIME,
  payload: {
    itemId,
    time
  }
});

export const setCTTestItem = ({
  itemId,
  answerId,
  testsLength,
  endTime,
  startTime,
  data
}) => ({
  type: SET_CT_ITEM,
  payload: {
    itemId,
    answerId,
    testsLength,
    endTime,
    startTime,
    data
  }
});

export const setPRTestItemTime = ({ itemId, time }) => ({
  type: SET_PR_ITEM_TIME,
  payload: {
    itemId,
    time
  }
});

export const setPRTestItem = ({
  itemId,
  answerId,
  testsLength,
  endTime,
  startTime,
  data
}) => ({
  type: SET_PR_ITEM,
  payload: {
    itemId,
    answerId,
    testsLength,
    endTime,
    startTime,
    data
  }
});

export const dropPR = () => ({
  type: DROP_PR
});

export const dropCT = () => ({
  type: DROP_CT
});

export const sendResReq = () => ({
  type: SEND_RES
});

export const failedResReq = () => ({
  type: SEND_RES_FAILED
});

export const successResReq = () => ({
  type: SEND_RES_SUCCESS
});

export const sendRes = testResult => dispatch => {
  dispatch(sendResReq());
  doPost("https://sheltered-harbor-32906.herokuapp.com/send-post", testResult)
    .then(r => {
      dispatch(successResReq());
    })
    .catch(e => {
      dispatch(failedResReq());
    });
};
