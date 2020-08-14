import React, { Component, Fragment } from "react";
import TeamCard from "../components/TeamCard";
import NewTeamForm from "../components/forms/NewTeamForm";
import { Route, NavLink } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Paper, Grid, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

class TeamsContainer extends Component {
  state = {
    successAlertShowing: false,
  };

  showSuccessAlert = () => {
    this.setState({
      ...this.state,
      successAlertShowing: true,
    });
  };

  render() {
    return (
      // this.state.successAlertShowing ?
      // (<Alert severity="error">This is an error alert — check it out!</Alert>) : (null),
      <div className="text-center" style={{ paddingRight: 100 }}>
        <Jumbotron>
          <Typography gutterBottom variant="h2" component="h4">
            Your Teams
          </Typography>
        </Jumbotron>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "4fr 4fr 4fr",
            gridGap: 10,
          }}
        >
          {this.props.teams.map((team) => {
            return (
              <TeamCard
                key={team.id}
                teamInfo={team}
                userId={this.props.userId}
                deleteTeam={this.props.deleteTeam}
              />
            );
          })}

          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <NavLink to="/teams/create-team" exact>
                <Paper
                  elevation={3}
                  style={{ borderRadius: "50%", margin: 50, marginTop: 75 }}
                >
                  <img
                    style={{ maxWidth: 200, maxHeight: 225, borderRadius: 100 }}
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
                  New Team
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
                  path="/teams/create-team"
                  render={(props) => (
                    <NewTeamForm
                      {...props}
                      userId={this.props.userId}
                      addTeam={this.props.addTeam}
                      showSuccessAlert={this.showSuccessAlert}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamsContainer;
