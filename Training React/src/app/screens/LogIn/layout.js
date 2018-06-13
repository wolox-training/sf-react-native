import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './styles.css';

import { required, passwordLength, email } from '../../../utils/validations.js';

import { strings } from './strings.js';
import { renderField } from './components/renderField.js';

const LogInForm = ({ handleSubmit, pristine, reset, submitting }) => (
  <Fragment>
    <h2 className="logIn-form-title">{strings.ticTacToeTitle}</h2>
    <form className="form-style" onSubmit={handleSubmit}>
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
      <div className="form-div">
        <button className="form-button" type="submit" disabled={submitting}>
          {strings.submitButton}
        </button>
        <button className="form-button" type="button" disabled={pristine || submitting} onClick={reset}>
          {strings.clearButton}
        </button>
      </div>
    </form>
  </Fragment>
);

LogInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'logIn' // a unique identifier for this form
})(LogInForm);
