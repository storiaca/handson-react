import React from 'react'
import List from './List';
import PropTypes from 'prop-types';
import JobListElement from './JobListElement';

const JobList = ({
  jobs
}) => <List items={jobs} itemElement={JobListElement} />
 
JobList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string,
    location: PropTypes.string,
    salary: PropTypes.string
  })),
}

export default JobList;
