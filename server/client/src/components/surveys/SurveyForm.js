import React from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import _ from "lodash";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmail";
import formFields from "./formFields";

class SurveyForm extends React.Component {
  renderFields() {
    return _.map(formFields, field => {
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
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a " + name;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
