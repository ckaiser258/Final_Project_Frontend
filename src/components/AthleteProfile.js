import React, { Component, Fragment } from "react";
import { api } from "../services/api";
import AthletePerformanceGraph from "./graphs/AthletePerformanceGraph";
import AthleteInjuryGraph from "./graphs/AthleteInjuryGraph";
import NewStatForm from "./forms/NewStatForm";
import NewInjuryForm from "./forms/NewInjuryForm";
import AthleteInjuryTable from "./tables/AthleteInjuryTable";
import AthletePerformanceTable from "./tables/AthletePerformanceTable";
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
    injuryTableShowing: false,
    performanceTableShowing: false,
  };

  updateCurrentStatInd = (index) => {
    this.setState({ currentStatInd: index });
  };

  fetchStats = () => {
    api.performance.getStats().then((data) => {
      this.setState(
        {
          stats: data.filter((stat) => {
            return stat.athlete_id === this.props.athleteInfo.id;
          }),
        },
        () => console.log(this.state.stats)
      );
    });
  };

  fetchInjuries = () => {
    api.performance.getInjuries().then((data) => {
      this.setState(
        {
          injuries: data.filter((injury) => {
            return injury.athlete_id === this.props.athleteInfo.id;
          }),
        },
        () => console.log(this.state.injuries)
      );
    });
  };

  addStat = (stat) => {
    api.performance.createStat(stat).then((res) => {
      this.props.fetchTeams()
      this.fetchStats();
    });
  };

  addInjury = (injury) => {
    api.performance.createInjury(injury).then((res) => {
      this.fetchInjuries();
      this.props.fetchTeams()
    });
  };

  deleteStat = (stat) => {
    api.performance.deleteStat(stat).then((res) => {
      this.fetchStats();
      this.props.fetchTeams()
    });
  };

  deleteInjury = (injury) => {
    api.performance.deleteInjury(injury).then((res) => {
      this.fetchInjuries();
      this.props.fetchTeams()
    });
  };

  stats = this.props.athleteInfo.stats;

  statsDates = this.stats.map((stat) => {
    return stat.date;
  });

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

  toggleInjuryTable = () => {
    this.state.injuryTableShowing === false
      ? this.setState({
          ...this.state,
          injuryTableShowing: true,
        })
      : this.setState({
          ...this.state,
          injuryTableShowing: false,
        });
  };

  togglePerformanceTable = () => {
    this.state.performanceTableShowing === false
      ? this.setState({
          ...this.state,
          performanceTableShowing: true,
        })
      : this.setState({
          ...this.state,
          performanceTableShowing: false,
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

  handleImageError = (e) => {
    e.target.src =
      "https://st3.depositphotos.com/4430281/13950/v/450/depositphotos_139504752-stock-illustration-muscular-sprinter-runner.jpg";
  };

  render() {
    return (
      <div className="text-center" style={{ paddingRight: 100 }}>
        <Jumbotron>
          <div className="row">
            <img
              src={this.props.athleteInfo.image}
              className="athlete-pic"
              onError={this.handleImageError}
            />{" "}
            <div style={{ marginRight: "auto", marginLeft: "110" }}>
              <Typography gutterBottom variant="h2" component="h4">
                {this.props.athleteInfo.first_name}{" "}
                {this.props.athleteInfo.last_name}
              </Typography>
              <Typography gutterBottom variant="h5" component="h4">
                {this.props.athleteInfo.year}
              </Typography>
            </div>
          </div>
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
                  stats={this.state.stats}
                  currentTests={this.state.stats.filter(
                    (stat) =>
                      stat.test_name ===
                      this.uniqueTestNames[this.state.currentStatInd]
                  )}
                  testName={this.uniqueTestNames[this.state.currentStatInd]}
                  athlete={this.props.athleteInfo}
                  toggleStatForm={this.toggleStatForm}
                  togglePerformanceTable={this.togglePerformanceTable}
                  tableShowing={this.state.performanceTableShowing}
                />
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          New Stat
                        </h5>
                        <button
                          type="button"
                          class="close"
                          id="close-button"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <NewStatForm
                          athlete={this.props.athleteInfo}
                          testNames={this.uniqueTestNames}
                          addStat={this.addStat}
                          toggleStatForm={this.toggleStatForm}
                          athleteUrl={this.props.athleteUrl}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </Fragment>
          ) : (
            <Container>
              <AthleteInjuryGraph
                injuries={this.state.injuries}
                toggleInjuryForm={this.toggleInjuryForm}
                toggleInjuryTable={this.toggleInjuryTable}
              />
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        New Injury
                      </h5>
                      <button
                        type="button"
                        class="close"
                        id="close-button"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body"></div>

                    <NewInjuryForm
                      athlete={this.props.athleteInfo}
                      toggleInjuryForm={this.toggleInjuryForm}
                      addInjury={this.addInjury}
                      addStat={this.addStat}
                    />
                  </div>
                </div>
              </div>
            </Container>
          )}
        </div>
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  id="close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AthleteInjuryTable
                  injuries={this.state.injuries}
                  deleteInjury={this.deleteInjury}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal3"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  id="close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AthletePerformanceTable
                  stats={this.state.stats}
                  deleteStat={this.deleteStat}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AthleteProfile;
