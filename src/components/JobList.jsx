import React, { Component } from 'react'
import List from './List';
import PropTypes from 'prop-types';
import JobListElement from './JobListElement';

export default class JobList extends Component {
  render() {
    const {jobs} = this.props;
    return (
      <List items={jobs} itemElement={JobListElement} />
    )
  }
}

JobList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string,
    location: PropTypes.string,
    salary: PropTypes.string
  })),
}

