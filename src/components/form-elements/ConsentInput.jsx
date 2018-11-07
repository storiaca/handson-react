import React, { Component } from 'react'
import CheckboxField from './CheckBoxField';

export default class ConsentInput extends Component {
  render() {
    const { 
      acceptedToS, 
      subscribedToNewsletter,
      onChange 
    } = this.props;

    return (
      <div>
        <CheckboxField 
          onChange={onChange}
          value={acceptedToS}
          name={acceptedToS}
          label="Accept ToS"
        />
        <CheckboxField 
          onChange={onChange}
          value={subscribedToNewsletter}
          name={subscribedToNewsletter}
          label="Send me your newsletter!"
        />
      </div>
    )
  }
}
