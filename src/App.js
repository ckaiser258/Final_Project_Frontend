import React, { Component, Fragment } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import ProfilePage from "./components/ProfilePage";
import { api } from "./services/api";
import Button from "react-bootstrap/Button";

class App extends Component {
  state = {
    auth: {
      user: {},
    },
  };

  login = (data) => {
    localStorage.setItem("token", data.jwt);
    this.setState({
      auth: {
        ...this.state.auth,
        user: {
          id: data.id,
          username: data.username,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
        },
      },
    });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then((data) => {
        this.setState({
          auth: {
            ...this.state.auth,
            user: {
              id: data.user.id,
              username: data.user.username,
              first_name: data.user.first_name,
              last_name: data.user.last_name,
              email: data.user.email,
            },
          },
        });
      });
    }
  }

  render() {
    console.log(this.state.auth);
    return (
      <Fragment>
        <Router>
          <Route
            exact
            path="/create-account"
            render={(props) => <NewUser {...props} onCreate={this.login} />}
          />
          <Route
            exact
            path="/"
            render={(props) => <Login {...props} onLogin={this.login} />}
          />
          <Route
            exact
            path="/home"
            render={(props) => (
              <ProfilePage {...props} userInfo={this.state.auth.user} />
            )}
          />
        </Router>
        {this.state.auth.user.id ? (
          <Button onClick={this.logout}>Logout</Button>
        ) : null}
      </Fragment>
    );
  }
}

export default App;
