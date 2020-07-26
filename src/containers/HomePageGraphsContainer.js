import React, { Component } from "react";
import HomePageGraphs from "../components/Graphs.js/HomePageGraphs";
import { Grid } from "@material-ui/core";
import Container from "react-bootstrap/Container";

class HomePageGraphsContainer extends Component {
  render() {
    // return this.props.teams.map((team) => {
    return (
      <div>
        <Container>
          {/* <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
          <HomePageGraphs teamInfo={team} teams={this.props.teams} />
          </Grid>
          </Grid> */}
          <HomePageGraphs teams={this.props.teams} />
        </Container>
      </div>
    );
    // });
  }
}

export default HomePageGraphsContainer;
