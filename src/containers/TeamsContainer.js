import React, { Component, Fragment } from "react";
import TeamCard from "../components/TeamCard";
import NewTeamForm from "../components/forms/NewTeamForm";
import { Route, NavLink } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron"
import {
  Paper,
  Grid,
  Typography
} from "@material-ui/core";

class TeamsContainer extends Component {

  render() {
    return (
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
            />
          );
        })}
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <NavLink to="/teams/create-team" exact>
                <Paper elevation={3} style={{borderRadius: "50%", margin: 50, marginTop: 75}} >
                  <img style={{maxWidth: 200, maxHeight: 225, borderRadius: 100}}src="https://cdn2.iconfinder.com/data/icons/everything-but-the-kitchen-sink-2/100/common-06-512.png" alt="Plus Sign"/>
                </Paper>
              </NavLink>
            </Grid>
          </Grid>
        </div>
        <Route
          path="/teams/create-team"
          render={(props) => (
            <NewTeamForm
              {...props}
              userId={this.props.userId}
              addTeam={this.props.addTeam}
            />
          )}
        />
      </div>
    );
  }
}

export default TeamsContainer;
