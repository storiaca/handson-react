import React, { Component } from "react";
import List from "./List";
import PropTypes from "prop-types";
import JobListElement from "./JobListElement";

// const JobList = ({
//   jobs
// }) => <List items={jobs} itemElement={JobListElement} />;

class JobList extends Component {
  render() {
    const { jobs, withStats } = this.props;
    const jobItems = jobs.map(job => ({ ...job, withStats: withStats }));
    return <List items={jobItems} itemElement={JobListElement} />;
  }
}
JobList.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      company: PropTypes.string,
      location: PropTypes.string,
      salary: PropTypes.string
    })
  )
};

export default JobList;
