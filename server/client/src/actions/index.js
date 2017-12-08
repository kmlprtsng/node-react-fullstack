import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  dispatch({
    type: FETCH_USER,
    payload: (await axios.get("/api/user/current")).data
  });
};

// normal code looks like this for returning an action creator with react redux
// but we are going to use redux-thunk to get direct access to the dispatcher.
// const request = axios.get("/api/user/current");
// return {
//     type: FETCH_USER,
//     payload: request
// }
