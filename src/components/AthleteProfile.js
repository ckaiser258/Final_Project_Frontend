import React, { Component, Fragment } from "react";
import AthletePerformanceGraph from "./Graphs.js/AthletePerformanceGraph";
import AthleteInjuryGraph from "./Graphs.js/AthleteInjuryGraph";
import NewStatForm from "./forms/NewStatForm";
import NewInjuryForm from "./forms/NewInjuryForm"
import InjuryTable from "./InjuryTable"
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Typography from "@material-ui/core/Typography";

class AthleteProfile extends Component {
  state = {
    currentStatInd: 0,
    stats: this.props.athleteInfo.stats,
    injuries: this.props.athleteInfo.injuries,
    statFormShowing: false,
    injuryFormShowing: false,
    statChartShowing: true,
    injuryChartShowing: false,
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

  toggleStatForm = () => {
    this.state.statFormShowing === false
      ? this.setState({
          ...this.state,
          statFormShowing: true,
        })
      : this.setState({
          ...this.state,
          statFormShowing: false,
        });
  };

  toggleInjuryForm = () => {
    this.state.injuryFormShowing === false
      ? this.setState({
          ...this.state,
          injuryFormShowing: true,
        })
      : this.setState({
          ...this.state,
          injuryFormShowing: false,
        });
  };

  switchCharts = () => {
    this.state.statChartShowing === true
      ? this.setState({
          ...this.state,
          statChartShowing: false,
          injuryChartShowing: true,
        })
      : this.setState({
          ...this.state,
          statChartShowing: true,
          injuryChartShowing: false,
        });
  };

  uniqueTestNames = this.stats
    .map((stat) => stat.test_name)
    .filter((value, index, self) => self.indexOf(value) === index);

  injuries = this.props.athleteInfo.injuries;

  athleteUrl = `${this.props.athleteInfo.first_name
    .replace(/\s+/g, "-")
    .toLowerCase()}-${this.props.athleteInfo.last_name
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

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
          <Button onClick={this.switchCharts}>
            {" "}
            {this.state.statChartShowing
              ? "Show / Add Injury Stats"
              : "Show Performance Stats"}{" "}
          </Button>
          {this.state.statChartShowing ? (
            <Fragment>
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
                  toggleStatForm={this.toggleStatForm}
                />
                {this.state.statFormShowing === true ? (
                <NewStatForm
                  athlete={this.props.athleteInfo}
                  testNames={this.uniqueTestNames}
                  toggleStatForm={this.toggleStatForm}
                />
              ) : null}
              </Container>
            </Fragment>
          ) : (
            <Container>
              <AthleteInjuryGraph injuries={this.injuries} toggleInjuryForm={this.toggleInjuryForm} />
                {this.state.injuryFormShowing === true ? (
                <NewInjuryForm
                  athlete={this.props.athleteInfo}
                  toggleInjuryForm={this.toggleInjuryForm}
                />
              ) : null}
            </Container>
          )}
        </div>
        <InjuryTable/>
      </div>
    );
  }
}

export default AthleteProfile;
