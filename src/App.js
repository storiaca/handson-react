import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import localStorage from "store2";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Navigation from "./components/Navigation";
import theme from "./theme";
import JobListPage from "./containers/JobListPage";
import CreateJobPage from "./containers/CreateJobPage";
import LoginPage from "./containers/LoginPage";
import ToS from "./containers/ToS";
import PrivacyPolicy from "./containers/PrivacyPolicy";
import JobPage from "./containers/JobPage";
import Footer from "./components/Footer";
import AuthAPI from "./api/AuthAPI";

const NotFound = () => <div>404 Page</div>;

const Page = styled.div`
  max-width: 75%;
  margin: 0 auto;
  min-height: 70vh;
`;

class App extends Component {
  state = { user: undefined };

  componentDidMount = async () => {
    const user = localStorage.get("user");
    if (user && user.sessionToken) {
      const { success } = await AuthAPI.checkSessionTokenMocked(
        user.sessinToken
      );
      if (success) {
        this.setState({
          user
        });
      } else {
        localStorage.remove("user");
      }
    }
  };

  onLogin = user => {
    localStorage.set("user", user);
    this.setState({ user });
    this.props.history.push("/");
  };

  handleLogout = e => {
    e.preventDefault();
    localStorage.remove("user");
    this.setState({ user: undefined });
    this.props.history.push("/");
  };

  handleSearch = e => {
    const { value } = e.target;
    this.props.history.push(value ? `/?search=${value}` : "/");
  };
  render() {
    const isLoggedIn = this.state.user && this.state.user.sessionToken;
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <h1>Adding Public Content</h1>
          </header>
          <Navigation
            isLoggedIn={isLoggedIn}
            onLogout={this.handleLogout}
            onSearch={this.handleSearch}
          />
          <Page>
            <Switch>
              <Route exact path="/" component={JobListPage} />
              <Route exact path="/job/:slug" component={JobPage} />
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
              <Route exact path="/terms-of-service" component={ToS} />
              <Route exact path="/privacy-policy" component={PrivacyPolicy} />
              <Route component={NotFound} />
            </Switch>
          </Page>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
