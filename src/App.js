import React, { Component, Fragment } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import ProfilePage from "./components/ProfilePage";
import TeamsContainer from './containers/TeamsContainer'
import { api } from "./services/api";
import Button from "react-bootstrap/Button";
import Sidebar from "./components/Sidebar";
import Grid from "@material-ui/core/Grid";

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

  items = [
    { name: "home", label: "Home" },
    {
      name: "billing",
      label: "Billing",
      items: [
        { name: "statements", label: "Statements" },
        { name: "reports", label: "Reports" },
      ],
    },
    {
      name: "settings",
      label: "Settings",
      items: [
        { name: "profile", label: "Profile" },
        { name: "insurance", label: "Insurance" },
        {
          name: "notifications",
          label: "Notifications",
          items: [
            { name: "email", label: "Email" },
            {
              name: "desktop",
              label: "Desktop",
              items: [
                { name: "schedule", label: "Schedule" },
                { name: "frequency", label: "Frequency" },
              ],
            },
            { name: "sms", label: "SMS" },
          ],
        },
      ],
    },
  ];

  classes = {
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: 20,
      textAlign: "center",
    },
  };

  render() {
    console.log(this.state.auth);
    return (
      <Fragment>
        <div className={this.classes.root} style={{ paddingTop: 25 }}>
          {/* <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}> */}
            {this.state.auth.user.id ? (
                <Sidebar items={this.items} />) : null}
              <Router>
                <Route
                  exact
                  path="/create-account"
                  render={(props) => (
                    <NewUser {...props} onCreate={this.login} />
                  )}
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
                <Route exact path="/teams" render={(props => <TeamsContainer {...props} userId={this.state.auth.user.id}/>
                )}
                />
              </Router>
              {/* </Grid>
          </Grid> */}
              {this.state.auth.user.id ? (
                <Button onClick={this.logout}>Logout</Button>
              ) : null}
        </div>
      </Fragment>
    );
  }
}

export default App;
