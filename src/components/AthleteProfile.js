import React, { Fragment } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Typography from "@material-ui/core/Typography";
import { Line } from "react-chartjs-2";

const AthleteProfile = (props) => {
  let stats = props.athleteInfo.stats;
//   let statsDates = stats.map(stat => {
//       return stat.date
//   })
//   let sortableDates = statsDates.map(date => {
//     return parseInt(date[0]+date[1]+date[3]+date[4]+date[6]+date[7]+date[8]+date[9])
// })
// let sortedDates = statsDates.map(date => {
//     sortableDates.sort().map(num => {
//         if (parseInt(date[0]+date[1]+date[3]+date[4]+date[6]+date[7]+date[8]+date[9]) === num) {
//             return date
//         }
//     })
// })
  let uniqueTestNames = stats
    .map((stat) => stat.test_name)
    .filter((value, index, self) => self.indexOf(value) === index);
  let injuries = props.athleteInfo.injuries;

  const data = {
    labels: stats.map((stat) => {
      return stat.date;
    }),

    datasets: [
      {
        label: "Result",
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: stats.map((stat) => {
          return stat.result;
        }),
      },
    ],
  };
  return (
    <Fragment>
      <div className="text-center" style={{ paddingRight: 100 }}>
        <Jumbotron>
          <Typography gutterBottom variant="h2" component="h4">
            {props.athleteInfo.first_name} {props.athleteInfo.last_name}
          </Typography>
        </Jumbotron>
        <div>
          <Tabs>
            {uniqueTestNames.map((testName) => {
              return (
                <Tab
                  key={testName}
                  eventKey={testName.toLowerCase()}
                  title={testName}
                >
                  <h3>
                    {stats.map((stat) => {
                      if (stat.test_name === testName) {
                        return <li>{stat.result}</li>;
                      }
                    })}
                  </h3>
                </Tab>
              );
            })}
          </Tabs>
          <Line
            data={data}
            height={250}
            width={350}
            options={{
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "Test Results",
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
      </div>
    </Fragment>
  );
};

export default AthleteProfile;
