import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import AthletePerformanceGraph from "./Graphs.js/AthletePerformanceGraph";
import AthleteInjuryGraph from "./Graphs.js/AthleteInjuryGraph";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Typography from "@material-ui/core/Typography";

class AthleteProfile extends Component {
  state = {
    currentStatInd: 0,
    stats: this.props.athleteInfo.stats,
    injuries: this.props.athleteInfo.injuries
  };

  updateCurrentStatInd = (index) => {
    this.setState({ currentStatInd: index });
  };

  stats = this.props.athleteInfo.stats;

  statsDates = this.stats.map((stat) => {
    return stat.date;
  });

    // addStat = (stat) => {
  //   this.setState({...this.state.stats, stat})
  // }

      // addInjury = (injury) => {
  //   this.setState({...this.state.injuries, injury})
  // }

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
            <li className="nav-item">
              {" "}
              <a className="nav-link" href="#">
                Performance Stats
              </a>
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link" href="#">
                Injuries
              </a>
            </li>
          </ul>
          <ul className="nav nav-tabs">
            {this.uniqueTestNames.map((testName, index) => (
              <li
                onClick={() => this.updateCurrentStatInd(index)}
                className="nav-item"
                key={testName}
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
          <Container>
            <AthletePerformanceGraph
              stats={this.props.athleteInfo.stats}
              currentTests={this.stats.filter(
                (stat) =>
                  stat.test_name ===
                  this.uniqueTestNames[this.state.currentStatInd]
              )}
              addStat={this.addStat}
              testName={this.uniqueTestNames[this.state.currentStatInd]}
              athlete={this.props.athleteInfo}
            />
            <AthleteInjuryGraph injuries={this.injuries} />
          </Container>
        </div>
      </div>
    );
  }
}

export default AthleteProfile;
