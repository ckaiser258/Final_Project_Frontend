import React, { Component, Fragment } from "react";
import TeamCard from "../components/TeamCard";
import TeamProfile from "../components/TeamProfile"
import NewTeamForm from "../components/forms/NewTeamForm";
import { api } from "../services/api";
import { Route, NavLink } from "react-router-dom";
import { Card, CardMedia, CardActionArea, Typography, Grid } from "@material-ui/core";

class TeamsContainer extends Component {

  render() {
    return (
      <div style={{display: "grid", gridTemplateColumns: "4fr 4fr 4fr", gridGap: 10, paddingRight: 40 }}>
        {this.props.teams.map((team) => {
          return <TeamCard key={team.id} teamInfo={team} userId={this.props.userId} />;
        })}
            <div style={{ paddingTop: 50 }}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <NavLink to="/teams/create-team" exact>
        <Card style={{ maxWidth: 345}}>
          <CardActionArea>
          <CardMedia
                component="img"
                alt="Plus Sign"
                height="287"
                image= "https://cdn2.iconfinder.com/data/icons/everything-but-the-kitchen-sink-2/100/common-06-512.png"
              />
          </CardActionArea>
        </Card>
        </NavLink>
        </Grid>
        </Grid>
        </div>
          <Route path="/teams/create-team" render={(props => <NewTeamForm {...props} userId={this.props.userId} addTeam={this.props.addTeam}/>)}/>
          <Route path={`${this.props.match.url}/:teamId`} render={props => <TeamProfile {...props} teams={this.props.teams}/>}/>
      </div>
    );
  }
}

export default TeamsContainer;
