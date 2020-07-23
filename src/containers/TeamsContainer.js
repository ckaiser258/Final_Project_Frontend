import React, { Component } from "react";
import TeamCard from "../components/TeamCard";
import NewTeamForm from "../components/forms/NewTeamForm";
import { Route, NavLink } from "react-router-dom";
import {
  Paper,
  Grid,
} from "@material-ui/core";

class TeamsContainer extends Component {
  render() {
    return (
      <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "4fr 4fr 4fr",
          gridGap: 10,
          paddingRight: 40,
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
                <Paper elevation={3} style={{borderRadius: "50%", margin: 50, marginTop: 100}} >
                  <img style={{maxWidth: 200, maxHeight: 225, borderRadius: 100}}src="https://cdn2.iconfinder.com/data/icons/everything-but-the-kitchen-sink-2/100/common-06-512.png"/>
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
