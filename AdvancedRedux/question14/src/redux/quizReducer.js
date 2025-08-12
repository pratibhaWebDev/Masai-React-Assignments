import axios from "axios";
import { QUIZ_REQUEST, QUIZ_SUCCESS, QUIZ_FAILURE, UPDATE_SCORE } from "./actionTypes";

export const fetchQuiz = () => async (dispatch) => {
  dispatch({ type: QUIZ_REQUEST });
  try {
    const res = await axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz");
    dispatch({ type: QUIZ_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: QUIZ_FAILURE, payload: "Failed to fetch quiz" });
  }
};

export const updateScore = (points) => ({
  type: UPDATE_SCORE,
  payload: points
});
