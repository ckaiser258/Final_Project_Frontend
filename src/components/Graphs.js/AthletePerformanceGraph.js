import React, { Fragment } from "react";
import { Line } from "react-chartjs-2";
import Button from "react-bootstrap/Button"

const AthletePerformanceGraph = (props) => {

    //Sort dates in ascending order (Since they're strings not date-time objects)

  let performanceDates = props.currentTests.map((test) => {
    return test.date;
  });

  let reverseDateRepresentation = (date) => {
    let parts = date.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  };

  let sortedPerformanceDates = performanceDates
    .map(reverseDateRepresentation)
    .sort()
    .map(reverseDateRepresentation)

  let performanceData = {
    labels: sortedPerformanceDates,
    datasets: [
      {
        label: "Result",
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: props.currentTests.map((test) => {
          return test.result;
        }),
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
            text: `${props.testName} Results`,
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
    <Button onClick={props.toggleStatForm}>Add Stat</Button>
    </Fragment>
  );
};

export default AthletePerformanceGraph;
