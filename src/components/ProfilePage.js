import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import HomePageGraphsContainer from "../containers/HomePageGraphsContainer";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Typography from "@material-ui/core/Typography";

class ProfilePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="text-center" style={{ paddingRight: 100 }}>
          <Jumbotron>
            <Typography gutterBottom variant="h2" component="h4">
              Hello, Coach {this.props.userInfo.last_name}
            </Typography>
          </Jumbotron>
          <HomePageGraphsContainer teams={this.props.teams} />
          <Link to="/teams">
            <Button onClick={this.props.fetchTeams} style={{ marginTop: 15 }}>View All Teams</Button>
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default ProfilePage;
