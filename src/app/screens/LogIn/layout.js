import React from 'react';
import { Field, reduxForm } from 'redux-form';

const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

const LogInForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
            validate={[
              val => (val ? undefined : 'Email field is required'),
              val => (val && emailRegex.test(val) ? undefined : 'Email format is invalid')
            ]}
          />
        </div>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
            validate={[
              val => (val ? undefined : 'Password field is required'),
              val => (val && val.length >= 8 ? undefined : 'Password must be at least 8 characters long')
            ]}
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'logIn' // a unique identifier for this form
})(LogInForm);
