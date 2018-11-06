import React, { Component } from 'react'
import TextInputField from './form-elements/TextInputField';
import CheckBoxField from './form-elements/CheckBoxField';
import SelectField from './form-elements/SelectedField';

const locationOptions = [
  {value: '', label: 'Blank'}, 
  {value: 'Berlin', label: 'Berlin'}, 
  {value: 'San Francisko', label: 'San Francisko'}, 
  {value: 'London', label: 'London'}, 
  {value: 'Austin', label: 'Austin'}, 
  {value: 'Tokyo', label: 'Tokyo'},
  {value: 'Barcelona', label: 'Barcelona'}, 
  {value: 'Other', label: 'Other'}
];

export default class JobCreationForm extends Component {
  handleChange(e) {
    const {type, name, value, checked } = e.target;
    if(type === 'checkbox') {
      console.log(name, ' ==> ', checked);
    } else {
      console.log(name, ' ==> ', value);
    }


  }
  render() {
    return (
      <form>
        <TextInputField 
          name="title"
          label="Title"
          onChange={this.handleChange}
        />
        <TextInputField 
          name="company"
          label="Company"
          onChange={this.handleChange}
        />

        <TextInputField
          name="salary"
          label="Salary"
          onChange={this.handleChange}
        />

        <CheckBoxField 
          name="isRemoteFriendly"
          label="Remote friendly?"
          onChange={this.handleChange}
        />

        <SelectField 
          name="location"
          label="Location"
          options={locationOptions}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}
