import React from 'react';
import PropTypes from 'prop-types';

export const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-div">
    <label className="form-label" htmlFor="form">
      {label}
    </label>
    <div className="form-field-div">
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span className="form-field-error">{error}</span>}
    </div>
  </div>
);

renderField.propTypes = {
  input: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.oneOf([PropTypes.bool, PropTypes.string])
};
