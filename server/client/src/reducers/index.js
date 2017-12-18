import { combineReducers } from "redux";
import authReducer from "./authReducers";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: reduxForm //the key has to be form.
});
