import React from 'react';
import PropTypes from 'prop-types';
import CheckboxField from './CheckBoxField';

const ConsentInput = ({
  acceptedToS, 
  subscribedToNewsletter,
  onChange 
}) => <div>
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
      </div>;

ConsentInput.propTypes = {
  onChange: PropTypes.func,
  acceptedToS: PropTypes.bool,
  subscribedToNewsletter: PropTypes.bool
};

export default ConsentInput;