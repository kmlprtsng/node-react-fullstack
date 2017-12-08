import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => {
  // normal code looks like this for returning an action creator with react redux
  // but we are going to use redux-thunk to get direct access to the dispatcher.
  // const request = axios.get("/api/user/current");
  // return {
  //     type: FETCH_USER,
  //     payload: request
  // }

  return function(dispatch) {
    axios.get("/api/user/current").then(res =>
      dispatch({
        type: FETCH_USER,
        payload: res
      })
    );
  };
};
