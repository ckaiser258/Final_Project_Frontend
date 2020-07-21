// This doubles as a team page as well as an AthletesContainer since athletes are sorted by team

import React, { Component } from "react";
import { api } from "../services/api";

class TeamProfile extends Component {
  state = {
    athletes: [],
  };

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
    this.fetchAthletes();
  }
  render() {
    console.log(this.props.teamInfo && this.props.teamInfo.name);
    return <h4>{this.props.teamInfo && this.props.teamInfo.name}</h4>;
  }
}

export default TeamProfile;
