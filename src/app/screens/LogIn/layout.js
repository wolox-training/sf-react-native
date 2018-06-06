import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './styles.css';

import { required, passwordLength, email } from '../../../utils/validations.js';

import { strings } from './strings.js';
import { renderField } from './components/renderField.js';

const LogInForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form className="formStyle" onSubmit={handleSubmit}>
      <Field
        name="email"
        type="email"
        component={renderField}
        label={strings.emailLabel}
        validate={[required, email]}
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label={strings.passwordLabel}
        validate={[required, passwordLength]}
      />
      <div className="formDiv">
        <button className="formButton" type="submit" disabled={submitting}>
          {strings.submitButton}
        </button>
        <button className="formButton" type="button" disabled={pristine || submitting} onClick={reset}>
          {strings.clearButton}
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
