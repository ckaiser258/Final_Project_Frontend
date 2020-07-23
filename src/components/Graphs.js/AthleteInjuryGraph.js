import React from "react";
import { Doughnut } from "react-chartjs-2";

const AthleteInjuryGraph = (props) => {
  let injuryDates = props.injuries.map((injury) => {
    return injury.date;
  });

  let injurySites = props.injuries.map((injury) => {
    return injury.site;
  });

  let injuryData = {
    labels: injurySites,
    datasets: [
      {
        label: "Result",
        fill: false,
        backgroundColor: [
          "#FF6383",
          "#36A2EB",
          "#F2BA52",
          "#00A6B4",
          "#6800B4",
        ],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: injurySites.map((injury) => {
          let counts = {};
          return (counts[injury] = (counts[injury] || 0) + 1);
        }),
      },
    ],
  };

  return (
    <div>
      <Doughnut
        data={injuryData}
        height={250}
        width={350}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Injuries",
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
  );
};

export default AthleteInjuryGraph;
