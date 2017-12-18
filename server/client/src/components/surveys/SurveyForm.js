import React from "react";
import { reduxForm } from "redux-form";

class SurveyForm extends React.Component {
  render() {
    return <div>Survey Form!!</div>;
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
