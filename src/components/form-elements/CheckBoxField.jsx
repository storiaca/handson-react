import React, { Component } from 'react'
import './InputField.css';

export default class CheckBoxField extends Component {
  
  render() {
    const { label, name, onChange, value } = this.props;
    return (
      <div className="checkbox-field">
        <input
          type="checkbox"
          name={name}
          id={name}
          onChange={onChange}
          value={value}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    )
  }
}
