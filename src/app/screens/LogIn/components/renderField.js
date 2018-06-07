import React from 'react';
import PropTypes from 'prop-types';

export const renderField = ({ input, label, type, meta: { touched, error } }) => (
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

renderField.propTypes = {
  input: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.oneOf([PropTypes.bool, PropTypes.string])
};
