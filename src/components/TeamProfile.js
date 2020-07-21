// This doubles as a team page as well as an AthletesContainer since athletes are sorted by team

import React, { Component, Fragment } from "react";
import AthleteCard from "./AthleteCard";
import { Route, NavLink } from "react-router-dom";
import NewAthleteForm from "./forms/NewAthleteForm";
import { api } from "../services/api";
import { Card, CardMedia, CardActionArea, Grid } from "@material-ui/core";

class TeamProfile extends Component {
  state = {
    athletes: [],
  };

  fetchAthletes = () => {
    return api.athletes.getAthletes().then((data) => {
      this.setState({
        athletes: data.filter(
          (athlete) => athlete.team_id == this.props.teamInfo.id
        ),
      });
    });
  };

  // addAthlete = (athlete) => {
  //   this.setState({...this.state.athletes, athlete})
  // }

  componentDidMount() {
    this.fetchAthletes();
  }
  render() {
    return (
      <div>
        <h4>{this.props.teamInfo && this.props.teamInfo.name}</h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 3fr 3fr 3fr",
            gridGap: 10,
            paddingRight: 40,
          }}
        >
          {this.state.athletes.map((athlete) => {
            return <AthleteCard key={athlete.id} athleteInfo={athlete} />;
          })}
          <div style={{ paddingTop: 50 }}>
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                <NavLink
                  to={`/team/${this.props.teamInfo.id}/add-athlete`}
                  exact
                >
                  <Card style={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Plus Sign"
                        height="287"
                        image="https://cdn2.iconfinder.com/data/icons/everything-but-the-kitchen-sink-2/100/common-06-512.png"
                      />
                    </CardActionArea>
                  </Card>
                </NavLink>
              </Grid>
            </Grid>
          </div>
          <Route
            path={`/team/${this.props.teamInfo.id}/add-athlete`}
            render={(props) => (
              <NewAthleteForm
                {...props}
                userId={this.props.userId}
                teamId={this.props.teamInfo.id}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default TeamProfile;
