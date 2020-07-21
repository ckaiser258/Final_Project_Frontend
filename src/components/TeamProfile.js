// This doubles as a team page as well as an AthletesContainer since athletes are sorted by team

import React, { Component, Fragment } from "react";
import AthleteCard from "./AthleteCard";
import { Route, NavLink } from "react-router-dom";
import NewAthleteForm from "./forms/NewAthleteForm";
import { api } from "../services/api";
import { Card, CardMedia, CardActionArea, Grid } from "@material-ui/core";

class TeamProfile extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.teamInfo && this.props.teamInfo.name}</h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 2fr 2fr 2fr 2fr 2fr",
            gridGap: 10,
            paddingRight: 40,
          }}
        >
          {this.props.athletes.map((athlete) => {
            return <AthleteCard key={athlete.id} athleteInfo={athlete} />;
          })}
                </div>
          <div style={{ paddingTop: 50 }}>
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                <NavLink
                  to={`/team/${this.props.teamInfo.id}/add-athlete`}
                  exact
                >
                  <Card style={{ maxWidth: 200 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Plus Sign"
                        height="200"
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
                addTeam={this.props.addTeam}
              />
            )}
          />
        </div>
    );
  }
}

export default TeamProfile;
