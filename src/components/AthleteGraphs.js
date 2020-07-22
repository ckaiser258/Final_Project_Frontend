import React from "react";
import { Line } from "react-chartjs-2";

const AthleteGraphs = (props) => {
    let dates = props.currentTests.map(test => {
        return test.date
    })
   
  return (
      console.log(dates),
    <Line 
      data={{
        labels: props.currentTests.map((test) => {
          return test.date;
        }),
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
      }}
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
  );
};

export default AthleteGraphs;
