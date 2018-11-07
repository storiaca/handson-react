import React, { Component } from "react";
import "./App.css";
import List from "./components/List";
import JobItem from "./components/JobListElement";
//import jobs from "./data/jobs";
import JobsAPI from './api/JobsAPI';
import JobCreationForm from './components/JobCreationForm';

class App extends Component {
  state = { 
    jobs: [],
    isFormVisible: false, 
    loading: false
  };

  componentDidMount = async() => {
    this.setState({ loading: true });
    const jobs = await JobsAPI.getJobs();
    this.setState({ jobs, loading: false });
  }

   toggleFormVisible = () => {
    this.setState({ 
      isFormVisible: !this.state.isFormVisible
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Creating a Reusable List Component</h1>
        </header>
       
        <button onClick={this.toggleFormVisible}>
          {this.state.isFormVisible ? 'Hide form' : 'Show form'}
        </button>
        <div style={{ display: this.state.isFormVisible ? 'block' : 'none' }}>
          <JobCreationForm />
        </div> 
        <List items={this.state.jobs} itemElement={JobItem} />

       
      </div>
    );
  }
}

export default App;
