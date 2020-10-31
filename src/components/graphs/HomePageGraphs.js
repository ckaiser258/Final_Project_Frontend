import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const HomePageGraphs = (props) => {

  const data = {
    labels: props.teams.map((team) => {
      return team.name;
    }),
    datasets: [
      {
        label: "Total Injuries",
        backgroundColor: "rgba(247, 223, 0, 0.6)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: props.teams.map((team) => {
          return team.injuries.length;
        }),
      },
    ],
  };

  return (
    <HorizontalBar
      data={data}
      height={350}
      width={400}
      options={{
        scales: {
          xAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      },
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Injuries By Team",
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

export default HomePageGraphs;
