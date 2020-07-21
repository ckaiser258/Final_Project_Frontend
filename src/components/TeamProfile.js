// This doubles as a team page as well as an AthletesContainer since athletes are sorted by team

import React, { Component } from "react";
import { api } from "../services/api";

class TeamProfile extends Component {
  state = {
    athletes: [],
  };

  thisTeam = () => { 
      let currentTeam = this.props.teams.filter(team => {
          return team.id == this.props.match.params.teamId
      })
      console.log(currentTeam, this.props.match.params.teamId)
    return currentTeam}

  fetchAthletes = () => {
    return api.athletes.getAthletes().then((data) => {
      this.setState({
        athletes: data.filter(
          (athlete) => athlete.team_id == this.props.match.params.teamId
        ),
      });
    });
  };

  componentDidMount() {
    this.fetchAthletes()
  }
  render() {
    this.thisTeam()
    return(<h4>{ this.props.teams[0] && this.thisTeam()[0].name }</h4>)
    // <div>{this.props.team.name}</div>)
  }
}

export default TeamProfile;
