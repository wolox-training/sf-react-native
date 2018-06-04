import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './styles.css';

// Validations
const required = value => (value ? undefined : 'Required Field');
const passwordLength = value => (value && value.length < 8 ? 'Must be at least 8 chars' : undefined);
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const email = value => (value && !emailRegex.test(value) ? 'Invalid email address' : undefined);

// eslint-disable-next-line
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="formDiv">
    <label className="formLabel" htmlFor="form">
      {label}
    </label>
    <div className="formFieldDiv">
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span className="formFieldError">{error}</span>}
    </div>
  </div>
);

const LogInForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form className="formStyle" onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email" validate={[required, email]} />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
        validate={[required, passwordLength]}
      />
      <div className="formDiv">
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

LogInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'logIn' // a unique identifier for this form
})(LogInForm);
