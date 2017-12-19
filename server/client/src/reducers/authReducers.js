import { FETCH_USER } from "../actions/types";
//state object, responsible for this reducer
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
