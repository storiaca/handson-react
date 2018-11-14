import React, { Component } from 'react'
import JobList from '../components/JobList';
import JobsAPI from '../api/JobsAPI';

export default class JobListPage extends Component {
  state = {
    jobs: [],
    loading: false
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    const jobs = await JobsAPI.getJobsMocked();
    this.setState({ jobs, loading: false });
  }

  render() {
    return (
      <div>
        <JobList jobs={this.state.jobs} />
      </div>
    )
  }
}
