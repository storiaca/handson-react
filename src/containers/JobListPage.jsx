import React, { Component } from 'react'
import JobList from '../components/JobList';
import JobsAPI from '../api/JobsAPI';
import SubtleErrorBox from '../components/SubtleErrorBox';

export default class JobListPage extends Component {
  state = {
    jobs: [],
    loading: false
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    const {success, response, error }= await JobsAPI.getJobsMocked();
    if(success) {
      this.setState({ 
        jobs: response.data, 
        loading: false 
      });
    } else {
      this.setState({
        error, 
        loading: false
      })
    }
    
  }

  render() {
    if(this.state.error) {
      return(
        <SubtleErrorBox label={this.state.error} />
      );
    }
    return (
      <div>
        <JobList jobs={this.state.jobs} />
      </div>
    )
  }
}
