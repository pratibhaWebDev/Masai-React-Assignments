import axios from "axios";
import {
  FETCH_MATCHES_REQUEST,
  FETCH_MATCHES_SUCCESS,
  FETCH_MATCHES_FAILURE,
  TOGGLE_FAVORITE
} from "./actionTypes";

const fetchMatchesRequest = () => ({ type: FETCH_MATCHES_REQUEST });
const fetchMatchesSuccess = (matches) => ({ type: FETCH_MATCHES_SUCCESS, payload: matches });
const fetchMatchesFailure = () => ({ type: FETCH_MATCHES_FAILURE });

export const toggleFavorite = (matchId) => ({
  type: TOGGLE_FAVORITE,
  payload: matchId
});

export const fetchMatches = () => async (dispatch) => {
  dispatch(fetchMatchesRequest());
  try {
    const res = await axios.get("https://jsonmock.hackerrank.com/api/football_matches?page=2");
    dispatch(fetchMatchesSuccess(res.data.data));
  } catch (err) {
    dispatch(fetchMatchesFailure());
  }
};
