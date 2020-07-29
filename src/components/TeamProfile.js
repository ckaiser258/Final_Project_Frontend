// This component doubles as a team page as well as an AthletesContainer since athletes are sorted by team

import React, { Component, Fragment } from "react";
import AthleteCard from "./AthleteCard";
import { Route, NavLink } from "react-router-dom";
import NewAthleteForm from "./forms/NewAthleteForm";
// import NewStatForm from "./forms/NewStatForm";
// import NewInjuryForm from "./forms/NewInjuryForm";
import AthletePerformanceGraph from "./Graphs.js/AthletePerformanceGraph";
import AthleteInjuryGraph from "./Graphs.js/AthleteInjuryGraph";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Paper, Grid, Typography } from "@material-ui/core";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import TeamInjuryTable from "./tables/AthleteInjuryTable";

class TeamProfile extends Component {
  state = {
    currentStatInd: 0,
    stats: this.props.teamInfo.stats,
    injuries: this.props.teamInfo.injuries,
    athletesShowing: false,
    statFormShowing: false,
    injuryFormShowing: false,
    statChartShowing: true,
    injuryChartShowing: false,
    injuryTableShowing: false,
  };

  updateCurrentStatInd = (index) => {
    this.setState({ currentStatInd: index });
  };

  stats = this.props.teamInfo.stats;

  averageStats = this.stats.map((stat) => {});

  statsDates = this.stats.map((stat) => {
    return stat.date;
  });

  uniqueTestNames = this.stats
    .map((stat) => stat.test_name)
    .filter((value, index, self) => self.indexOf(value) === index);

  injuries = this.props.teamInfo.injuries;

  // addStat = (stat) => {
  //   this.setState({...this.state.stats, stat})
  // }

  // addInjury = (injury) => {
  //   this.setState({...this.state.injuries, injury})
  // }

  toggleStatForm = () => {
    this.state.statFormShowing === false
      ? this.setState({
          ...this.state,
          statFormShowing: true,
        })
      : this.setState({
          ...this.state,
          statFormShowing: false,
        });
  };

  toggleInjuryForm = () => {
    this.state.injuryFormShowing === false
      ? this.setState({
          ...this.state,
          injuryFormShowing: true,
        })
      : this.setState({
          ...this.state,
          injuryFormShowing: false,
        });
  };

  toggleInjuryTable = () => {
    this.state.injuryTableShowing === false
      ? this.setState({
          ...this.state,
          injuryTableShowing: true,
        })
      : this.setState({
          ...this.state,
          injuryTableShowing: false,
        });
  };

  toggleAthletes = () => {
    this.state.athletesShowing === false
      ? this.setState({
          ...this.state,
          athletesShowing: true,
        })
      : this.setState({
          ...this.state,
          athletesShowing: false,
        });
  };

  switchCharts = () => {
    this.state.statChartShowing === true
      ? this.setState({
          ...this.state,
          statChartShowing: false,
          injuryChartShowing: true,
        })
      : this.setState({
          ...this.state,
          statChartShowing: true,
          injuryChartShowing: false,
        });
  };

  render() {
    return (
      <div className="text-center" style={{ paddingRight: 100 }}>
        <div>
          <Jumbotron>
            <Typography gutterBottom variant="h2" component="h4">
              {this.props.teamInfo && this.props.teamInfo.name}
            </Typography>
          </Jumbotron>
        </div>
        <div>
          <Button onClick={this.switchCharts}>
            {" "}
            {this.state.statChartShowing
              ? "Show Injury Stats"
              : "Show Performance Stats"}{" "}
          </Button>
          {this.state.statChartShowing ? (
            <Fragment>
              <ul className="nav nav-tabs">
                {this.uniqueTestNames.map((testName, index) => (
                  <li
                    onClick={() => this.updateCurrentStatInd(index)}
                    className="nav-item"
                    key={testName}
                  >
                    <a
                      className={
                        index === this.state.currentStatInd
                          ? "nav-link active"
                          : "nav-link"
                      }
                      href="#"
                    >
                      {testName}
                    </a>
                  </li>
                ))}
              </ul>
              <Container>
                <AthletePerformanceGraph
                  stats={this.props.teamInfo.stats}
                  teamCurrentTests={this.stats.filter(
                    (stat) =>
                      stat.test_name ===
                      this.uniqueTestNames[this.state.currentStatInd]
                  )}
                  addStat={this.addStat}
                  testName={this.uniqueTestNames[this.state.currentStatInd]}
                  toggleStatForm={this.toggleStatForm}
                />
                <Button onClick={this.toggleAthletes} style={{ marginTop: 20 }}>
                  {this.state.athletesShowing
                    ? "Hide Athletes"
                    : "View / Add Athletes"}
                </Button>
                {/* {this.state.statFormShowing === true ? (
                  <NewStatForm
                    teamAthletes={this.props.teamInfo.athletes}
                    testNames={this.uniqueTestNames}
                    toggleStatForm={this.toggleStatForm}
                  />
                ) : null} */}
              </Container>
            </Fragment>
          ) : (
            <Container>
              <AthleteInjuryGraph
                injuries={this.injuries}
                noAdding={" "}
                toggleInjuryForm={this.toggleInjuryForm}
                toggleInjuryTable={this.toggleInjuryTable}
                tableShowing={this.state.injuryTableShowing}
              />
              {/* {this.state.injuryFormShowing === true ? (
                <NewInjuryForm
                  athlete={this.props.athleteInfo}
                  toggleInjuryForm={this.toggleInjuryForm}
                />
              ) : null} */}
            </Container>
          )}
        </div>

        {this.state.injuryTableShowing === true ? (
          <TeamInjuryTable
            teamInjuries={this.injuries}
            athletes={this.props.athletes}
          />
        ) : null}

        {this.state.athletesShowing ? (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 2fr 2fr 2fr 2fr 2fr",
                gridGap: 10,
                paddingRight: 40,
              }}
            >
              {this.props.athletes.map((athlete) => {
                return (
                  <AthleteCard
                    key={athlete.id}
                    athleteInfo={athlete}
                    deleteAthlete={this.props.deleteAthlete}
                  />
                );
              })}
            </div>
            <div style={{ paddingTop: 50 }}>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <NavLink
                    to={`/team/${this.props.teamInfo.id}/add-athlete`}
                    exact
                  >
                    <Paper
                      elevation={3}
                      style={{ borderRadius: "50%", marginTop: 20 }}
                    >
                      <img
                        style={{
                          maxWidth: 170,
                          maxHeight: 195,
                          borderRadius: 100,
                        }}
                        src="https://cdn2.iconfinder.com/data/icons/everything-but-the-kitchen-sink-2/100/common-06-512.png"
                        alt="Plus Sign"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      />
                    </Paper>
                  </NavLink>
                </Grid>
              </Grid>
            </div>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                     New Athlete
                    </h5>
                    <button
                      type="button"
                      class="close"
                      id="close-button"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <Route
                      path={`/team/${this.props.teamInfo.id}/add-athlete`}
                      render={(props) => (
                        <NewAthleteForm
                          {...props}
                          userId={this.props.userId}
                          teamId={this.props.teamInfo.id}
                          addAthlete={this.props.addAthlete}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default TeamProfile;
