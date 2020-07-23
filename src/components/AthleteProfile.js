import React, { Component } from "react";
import AthleteGraphs from "./AthleteGraphs";
import Jumbotron from "react-bootstrap/Jumbotron";
import Typography from "@material-ui/core/Typography";

class AthleteProfile extends Component {
  state = {
    currentStatInd: 0,
  };

  updateCurrentStatInd = (index) => {
    this.setState({ currentStatInd: index });
  };

  stats = this.props.athleteInfo.stats;

  statsDates = this.stats.map((stat) => {
    return stat.date;
  });

  uniqueTestNames = this.stats
    .map((stat) => stat.test_name)
    .filter((value, index, self) => self.indexOf(value) === index);

  injuries = this.props.athleteInfo.injuries;

  render() {
    return (
        <div className="text-center" style={{ paddingRight: 100 }}>
          <Jumbotron>
            <Typography gutterBottom variant="h2" component="h4">
              {this.props.athleteInfo.first_name}{" "}
              {this.props.athleteInfo.last_name}
            </Typography>
          </Jumbotron>
          <div>
            <ul className="nav nav-tabs">
              {this.uniqueTestNames.map((testName, index) => (
                <li
                  onClick={() => this.updateCurrentStatInd(index)}
                  className="nav-item"
                >
                  <a
                    className={
                      index === this.state.currentStatInd
                        ? "nav-link active"
                        : "nav-link"
                    }
                    href="#"
                  >
                    {testName}
                  </a>
                </li>
              ))}
            </ul>
            <AthleteGraphs
              stats={this.props.athleteInfo.stats}
              currentTests={this.stats.filter(
                (stat) =>
                  stat.test_name ===
                  this.uniqueTestNames[this.state.currentStatInd]
              )}
              testName={this.uniqueTestNames[this.state.currentStatInd]}
            />
          </div>
        </div>
    );
  }
}

export default AthleteProfile;
