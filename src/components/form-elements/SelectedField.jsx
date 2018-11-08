import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

const SelectedField = ({
  label, name, options, onChange, value
}) => <div className="input-field">
        <label
          className="input-field__label"
          htmlFor={name}
        >
          {label}
        </label>
        <select
          className="input-field__text-input"
          name={name}
          id={name}
          onChange={onChange}
          value={value}
        >
         {options.map(option => 
           <option 
            value={option.value} 
            key={option.label}
          >
            {option.label}
          </option>
         )}
        </select>
      </div>;

SelectedField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default SelectedField;