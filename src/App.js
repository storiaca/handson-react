import React, { Component } from "react";
import "./App.css";
//import List from "./components/List";
//import JobItem from "./components/JobListElement";
//import jobs from "./data/jobs";
import JobCreationForm from './components/JobCreationForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Creating a Reusable List Component</h1>
        </header>
        {/* <List items={jobs} itemElement={JobItem} /> */}
        <JobCreationForm />
      </div>
    );
  }
}

export default App;
