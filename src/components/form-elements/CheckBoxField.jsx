import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

const CheckBoxField = ({
  label, name, onChange, value
}) => <div className="checkbox-field">
        <input
          type="checkbox"
          name={name}
          id={name}
          onChange={onChange}
          value={value}
        />
        <label htmlFor={name}>{label}</label>
      </div>;


CheckBoxField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool
}

export default CheckBoxField;