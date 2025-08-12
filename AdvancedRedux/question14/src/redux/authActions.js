import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionTypes";

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post("https://reqres.in/api/login", { email, password });
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response?.data?.error || "Login failed" });
  }
};

export const logout = () => ({ type: LOGOUT });
