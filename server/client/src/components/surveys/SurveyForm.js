import React from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import _ from "lodash";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmail";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipients List", name: "recipients" }
];

class SurveyForm extends React.Component {
  renderFields() {
    return _.map(FIELDS, field => {
      return (
        <Field
          component={SurveyField}
          type="text"
          key={field.name}
          label={field.label}
          name={field.name}
        />
      );
    });
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
        {this.renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  //make sure property on the error matches the field property
  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a " + name;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm"
})(SurveyForm);
