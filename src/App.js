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
import JobsManagementPage from "./containers/JobsManagementPage";
import ToS from "./containers/ToS";
import PrivacyPolicy from "./containers/PrivacyPolicy";
import JobPage from "./containers/JobPage";
import Footer from "./components/Footer";
import AuthAPI from "./api/AuthAPI";
import UserRole from "./enums/UserRole";
import AdminDashboard from "./containers/AdminDashboard";

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
    if (user.role === UserRole.ADMIN) {
      this.props.history.push("/dashboard");
    } else {
      this.props.history.push("/manage");
    }
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
    const userRole = this.state.user
      ? this.state.user.role
      : UserRole.ANONYMOUS;
    const isLoggedIn =
      this.state.user &&
      this.state.user.sessionToken &&
      userRole > UserRole.ANONYMOUS;
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <h1>Handling Different User Roles in Our System</h1>
          </header>
          <Navigation
            userRole={userRole}
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
              <Route
                exact
                path="/manage"
                component={() =>
                  isLoggedIn ? (
                    <JobsManagementPage
                      userId={this.state.user.id}
                      userRole={userRole}
                    />
                  ) : (
                    <Redirect to={"/"} />
                  )
                }
              />
              <Route
                exact
                path="/dashboard"
                component={() =>
                  isLoggedIn && userRole === UserRole.ADMIN ? (
                    <AdminDashboard />
                  ) : (
                    <Redirect to={"/"} />
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
