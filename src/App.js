import React, { Component, Fragment } from "react";
import { trackPromise } from "react-promise-tracker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import NewUser from "./components/NewUser";
import EditUser from "./components/forms/EditUserForm"
import ProfilePage from "./components/ProfilePage";
import TeamsContainer from "./containers/TeamsContainer";
import TeamProfile from "./components/TeamProfile";
import AthleteProfile from "./components/AthleteProfile";
import Sidebar from "./components/Sidebar";
import { api } from "./services/api";
import { Navbar, Button } from "react-bootstrap";

class App extends Component {
  state = {
    auth: {
      user: {},
    },
    teams: [],
    athletes: [],
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
    this.fetchUser()
    this.fetchTeams()
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };

  fetchUser = () => {
    trackPromise(
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
      })
    );
  };

  fetchTeams = () => {
    trackPromise(
      api.teams.getTeams().then((data) => {
        console.log(data);
        this.setState({
          teams: data.filter((team) => {
            return team.user_id === this.state.auth.user.id;
          }),
        });
      })
    );
  };
  fetchAthletes = () => {
    trackPromise(
      api.athletes.getAthletes().then((data) => {
        this.setState(
          {
            athletes: data.filter((athlete) => {
              return athlete.user_id === this.state.auth.user.id;
            }),
          },
          () => console.log(this.state.athletes)
        );
      })
    );
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.fetchUser();
      this.fetchTeams();
      this.fetchAthletes();
    }
  }

  addTeam = (team) => {
    api.teams.createTeam(team).then((res) => {
      this.fetchTeams();
    });
  };

  addAthlete = (athlete) => {
    api.athletes.createAthlete(athlete).then((res) => {
      this.fetchTeams();
      this.fetchAthletes();
    });
  };

  // addStat = (stat) => {
  //   api.performance.createStat(stat).then((res) => {
  //     this.fetchTeams();
  //   });
  // };

  // addInjury = (injury) => {
  //   api.performance.createInjury(injury).then((res) => {
  //     this.fetchTeams();
  //   });
  // };

  deleteTeam = (team) => {
    api.teams.deleteTeam(team).then((res) => {
      this.fetchTeams();
    });
  };

  deleteAthlete = (athlete) => {
    api.athletes.deleteAthlete(athlete).then((res) => {
      this.fetchTeams();
    });
  };

  // deleteStat = (stat) => {
  //   api.performance.deleteStat(stat).then((res) => {
  //     this.fetchTeams();
  //   });
  // };

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
    return (
      <Fragment>
        <div>
          <Navbar bg="light">
            <i class="far fa-chart-bar fa-lg" style={{ marginRight: 7 }}></i>
            <Navbar.Brand href={this.state.auth.user.id ? "/home" : "/"}>
              Performance Mapper
            </Navbar.Brand>
            {this.state.auth.user.id ? (
              <div style={{ position: "absolute", right: "45px" }}>
                <Button
                  size="sm"
                  href="/"
                  variant="outline-primary"
                  onClick={this.logout}
                >
                  Logout
                </Button>
              </div>
            ) : null}
          </Navbar>
        </div>
        <div
          className={this.classes.root}
          style={{
            paddingTop: 25,
            display: "grid",
            gridTemplateColumns: "1fr 4fr",
            gridGap: 10,
          }}
        >
          {this.state.auth.user.id ? <Sidebar items={this.items} /> : null}
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
              path="/edit-account"
              render={(props) => <EditUser {...props} currentUser={this.state.auth.user} />}
            />
            <Route
              exact
              path="/home"
              render={(props) => (
                <ProfilePage
                  {...props}
                  userInfo={this.state.auth.user}
                  teams={this.state.teams}
                />
              )}
            />
            <Route
              path="/teams"
              render={(props) => (
                <TeamsContainer
                  {...props}
                  userId={this.state.auth.user.id}
                  teams={this.state.teams}
                  addTeam={this.addTeam}
                  deleteTeam={this.deleteTeam}
                />
              )}
            />
            {this.state.teams.map((team) => {
              return (
                <Route
                  key={team.id}
                  path={`/team/${team.id}`}
                  render={(props) => (
                    <TeamProfile
                      {...props}
                      userId={this.state.auth.user.id}
                      teamInfo={team}
                      addAthlete={this.addAthlete}
                      deleteAthlete={this.deleteAthlete}
                      athletes={team.athletes}
                    />
                  )}
                />
              );
            })}
            {this.state.athletes.map((athlete) => {
              const athleteUrl = `${athlete.first_name
                .replace(/\s+/g, "-")
                .toLowerCase()}-${athlete.last_name
                .replace(/\s+/g, "-")
                .toLowerCase()}`;
              return (
                <Route
                  key={athlete.id}
                  path={`/${athlete.id}/${athleteUrl}`}
                  render={(props) => (
                    <AthleteProfile
                      {...props}
                      athleteInfo={athlete}
                      fetchAthletes={this.fetchAthletes}
                      fetchTeams={this.fetchTeams}
                      addStat={this.addStat}
                      addInjury={this.addInjury}
                      deleteStat={this.deleteStat}
                    />
                  )}
                />
              );
            })}
          </Router>
        </div>
      </Fragment>
    );
  }
}

export default App;
