import React, { Component, Fragment } from "react";
import TeamCard from "../components/TeamCard";
import NewTeamForm from "../components/forms/NewTeamForm";
import { api } from "../services/api";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Card, CardActionArea, Typography } from "@material-ui/core";

class TeamsContainer extends Component {
  state = {
    teams: [],
  };

  componentDidMount() {
    api.teams.getTeams().then((data) => {
      this.setState({
        teams: data,
      });
    });
  }

  addTeam = (team) => {
    this.setState({...this.state.teams, team})
  } //not working

  render() {
    return (
      <div>
        {this.state.teams.map((team) => {
          return <TeamCard key={team.id} teamInfo={team} userId={this.props.userId} />;
        })}
        <Card style={{ maxWidth: 345, paddingTop: 50 }}>
          <CardActionArea>
            <Typography gutterBottom variant="h2" component="h2">
              + Add Team
            </Typography>
          </CardActionArea>
        </Card>
        {/* <Router>
          <Route exact path="/create-team" component={NewTeamForm}>
          </Route>
        </Router> */}
        <NewTeamForm userId={this.props.userId} addTeam={this.addTeam}/>
      </div>
    );
  }
}

export default TeamsContainer;
