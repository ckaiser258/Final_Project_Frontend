import React, { Fragment } from "react";
import { Line } from "react-chartjs-2";
import Button from "react-bootstrap/Button";

const AthletePerformanceGraph = (props) => {
  let performanceDates = props.currentTests
    ? props.currentTests.map((test) => {
        return test.date;
      })
    : props.teamCurrentTests.map((test) => {
        return test.date;
      });

  let sortedPerformanceDates = performanceDates.sort(function (a, b) {
    return new Date(a) - new Date(b);
  });

  if (props.teamCurrentTests) {
    let results = props.teamCurrentTests.map((test) => {
      return test.result;
    });
  }

  let uniqueDates = props.stats
    .map((stat) => stat.date)
    .filter((value, index, self) => self.indexOf(value) === index);

  let allResultsOfDate = uniqueDates.map((date) => {
    props.stats.map((stat) => {
      let resultOfDate = [];
      for (let i = 0; i < props.stats.length; i++) {}
    });
  });

  let sortedAthletePerformanceTests = props.currentTests
    ? props.currentTests.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      })
    : {};

  const aggregateResults = () => {
    let sortedPerformanceTests = props.teamCurrentTests.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
    let aggregatedResults = {};
    for (let i = 0; i < sortedPerformanceTests.length; i++) {
      let test = sortedPerformanceTests[i];
      if (aggregatedResults[test.date]) {
        aggregatedResults[test.date] = [
          ...aggregatedResults[test.date],
          test.result,
        ];
      } else {
        aggregatedResults[test.date] = [test.result];
      }
    }
    for (let result in aggregatedResults) {
      let averageResult =
        aggregatedResults[result].reduce((a, b) => a + b, 0) /
        aggregatedResults[result].length;
      aggregatedResults[result] = Math.round(100 * averageResult) / 100;
    }
    return aggregatedResults;
  };

  let teamAverage = props.currentTests ? {} : aggregateResults();

  let performanceData = {
    labels: props.currentTests
      ? sortedPerformanceDates
      : Object.keys(teamAverage),
    datasets: [
      {
        label: props.currentTests ? "Result" : "Team Average",
        fill: true,
        backgroundColor: "rgba(247, 223, 0, 0.6)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: props.currentTests
          ? sortedAthletePerformanceTests.map((test) => {
              return test.result;
            })
          : Object.values(teamAverage),
      },
    ],
  };
  return (
    <Fragment>
      <div>
        <Line
          data={performanceData}
          height={250}
          width={350}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: `${
                props.testName ? `${props.testName}` : "No Data Available"
              }`,
              maintainAspectRatio: false,
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
      {props.currentTests ? (
        <Button
          onClick={props.toggleStatForm}
          style={{ marginTop: 5, marginBottom: 10 }}
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add Stat
        </Button>
      ) : null}{" "}
      {props.currentTests ? (
        <Button
          onClick={props.togglePerformanceTable}
          style={{ marginTop: 5, marginBottom: 10 }}
          data-toggle="modal"
          data-target="#exampleModal3"
        >
          View Stats Table
        </Button>
      ) : null}
    </Fragment>
  );
};

export default AthletePerformanceGraph;
