import axios from "axios";

import {
  GET_QUESTIONLIST,
  GET_QUESTION,
  QUESTION_ERROR,
  QUESTION_UNLOADED,
  QUESTIONLIST_UNLOADED,
} from "./types";
import apiUrl from '../utils/apiUrl'

//Get question by question_id (User)
export const getQuestionById = (questionId) => async (dispatch) => {
  try {
    const res = await axios.get(`${apiUrl}/api/question/user/id/${questionId}`);

    dispatch({
      type: GET_QUESTION,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: QUESTION_ERROR,
      payload: err,
    });
  }
};

//Get user questionlist
export const getUserQuestionList = (roomId) => async (dispatch) => {
  try {
    const res = await axios.get(`${apiUrl}/api/question/user/room/${roomId}`);
    dispatch({
      type: GET_QUESTIONLIST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: QUESTION_ERROR,
      payload: err,
    });
  }
};

//question Unload
export const questionUnload = () => async (dispatch) => {
  try {
    dispatch({ type: QUESTION_UNLOADED });
  } catch (err) {
    dispatch({
      type: QUESTION_ERROR,
      payload: err,
    });
  }
};

//questionlist Unload
export const questionListUnload = () => async (dispatch) => {
  try {
    dispatch({ type: QUESTIONLIST_UNLOADED });
  } catch (err) {
    dispatch({
      type: QUESTION_ERROR,
      payload: err,
    });
  }
};
