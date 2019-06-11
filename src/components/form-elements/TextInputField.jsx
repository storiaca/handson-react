import React from "react";
import PropTypes from "prop-types";
import "./InputField.css";

const TextInputField = ({
  name,
  label,
  onChange,
  value,
  required,
  onBlur,
  type = "text"
}) => (
  <div className="input-field">
    <label className="input-field__label" htmlFor={name}>
      {label}
    </label>
    <input
      id={name}
      name={name}
      value={value}
      type={type}
      className="input-field__text-input"
      required={required}
      onChange={onChange}
      onBlur={onBlur}
    />
  </div>
);

TextInputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func
};

export default TextInputField;
