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

const initialState = {
  title: '',
  company: '',
  salary: '',
  isRemoteFriendly: false,
  location: ''
};

export default class JobCreationForm extends Component {
  state = initialState;

  handleChange = (e) => {
    const {type, name, value, checked } = e.target;
    if(type === 'checkbox') {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value})
    }
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInputField 
          name="title"
          label="Title"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <TextInputField 
          name="company"
          label="Company"
          onChange={this.handleChange}
          value={this.state.company}
        />

        <TextInputField
          name="salary"
          label="Salary"
          onChange={this.handleChange}
          value={this.state.salary}
        />

        <CheckBoxField 
          name="isRemoteFriendly"
          label="Remote friendly?"
          onChange={this.handleChange}
          value={this.state.isRemoteFriendly}
        />

        <SelectField 
          name="location"
          label="Location"
          options={locationOptions}
          onChange={this.handleChange}
          value={this.state.location}
        />

        <button>Submit Job</button>
      </form>
    )
  }
}
