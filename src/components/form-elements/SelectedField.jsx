import React, { Component } from 'react';
import './InputField.css';

export default class SelectedField extends Component {

  render() {
    const {label, name, options, onChange} = this.props;
    return (
      <div className="input-field">
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
      </div>
    )
  }
}
