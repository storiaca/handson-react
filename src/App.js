import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Navigation from "./components/Navigation";
import theme from "./theme";
import JobListPage from "./containers/JobListPage";
import CreateJobPage from "./containers/CreateJobPage";
import LoginPage from "./containers/LoginPage";

const NotFound = () => <div>404 Page</div>;

class App extends Component {
  state = { user: undefined };

  onLogin = user => {
    this.setState({ user });
    this.props.history.push("/");
  };
  render() {
    const isLoggedIn = this.state.user && this.state.user.sessionToken;
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <h1>Working with API</h1>
          </header>
          <Navigation isLoggedIn={isLoggedIn} />
          <Switch>
            <Route exact path="/" component={JobListPage} />
            <Route
              exact
              path="/add-job"
              component={() =>
                isLoggedIn ? <CreateJobPage /> : <Redirect to={"/login"} />
              }
            />
            <Route
              exact
              path="/login"
              component={() =>
                isLoggedIn ? (
                  <Redirect to={"/"} />
                ) : (
                  <LoginPage onLogin={this.onLogin} />
                )
              }
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
