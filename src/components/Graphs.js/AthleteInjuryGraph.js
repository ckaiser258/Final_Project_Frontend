import React, { Fragment } from "react";
import { Doughnut } from "react-chartjs-2";
import Button from "react-bootstrap/Button"


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
    <Fragment>
    <div>
      <Doughnut
        data={injuryData}
        height={325}
        width={425}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: `${props.injuries.length !== 0 ? `Injuries` : "No Data Available"}`,
            maintainAspectRatio: false,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
          layout: {
            padding: {
                left: 100,
                top: 25,
                bottom: 20
            }
        }
      }}
      />
    </div>
        <Button onClick={props.toggleInjuryForm} style={{marginTop: 50}, {marginBottom: 10}}>Add Injury</Button>{' '}
        <Button onClick={props.toggleInjuryTable} style={{marginTop: 50}, {marginBottom: 10}}>View Injury History</Button>
        </Fragment>
  );
};

export default AthleteInjuryGraph;
