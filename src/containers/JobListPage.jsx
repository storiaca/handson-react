import React, { Component } from "react";
import JobList from "../components/JobList";
import JobsAPI from "../api/JobsAPI";
import SubtleErrorBox from "../components/SubtleErrorBox";
import Spinner from "../components/Spinner";
export default class JobListPage extends Component {
  state = {
    jobs: [],
    loading: false
  };

  componentDidMount = async () => {
    await this.loadJobList();
  };

  componentDidUpdate = async prevProps => {
    if (prevProps.location.search !== this.props.location.search) {
      await this.loadJobList();
    }
  };

  loadJobList = async () => {
    this.setState({ loading: true });
    const searchQuery = this.props.location.search.replace("?search=", "");
    const { success, response, error } = await JobsAPI.getJobsMocked(
      searchQuery
    );
    if (success) {
      this.setState({
        jobs: response.data,
        loading: false,
        error: undefined
      });
    } else {
      this.setState({
        error,
        loading: false
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }
    if (this.state.error) {
      return <SubtleErrorBox label={this.state.error} />;
    }
    return (
      <div>
        <JobList jobs={this.state.jobs} />
      </div>
    );
  }
}
