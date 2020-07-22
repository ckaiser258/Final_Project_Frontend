import React, { Fragment } from "react";
import AthleteGraphs from "./AthleteGraphs";
import Jumbotron from "react-bootstrap/Jumbotron";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Typography from "@material-ui/core/Typography";

const AthleteProfile = (props) => {
  let stats = props.athleteInfo.stats;

    let statsDates = stats.map(stat => {
        return stat.date
    })
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

  //Sort dates in ascending order (Since they're strings not date-time objects)





  let uniqueTestNames = stats
    .map((stat) => stat.test_name)
    .filter((value, index, self) => self.indexOf(value) === index);
  let injuries = props.athleteInfo.injuries;

  return (
    <Fragment>
        {console.log(statsDates)}
      <div className="text-center" style={{ paddingRight: 100 }}>
        <Jumbotron>
          <Typography gutterBottom variant="h2" component="h4">
            {props.athleteInfo.first_name} {props.athleteInfo.last_name}
          </Typography>
        </Jumbotron>
        <div>
          <Tabs>
            {uniqueTestNames.map((testName) => {
              let currentTests = stats.filter((stat) => {
                return stat.test_name === testName;
              });
              return (
                <Tab
                  key={testName}
                  eventKey={testName.toLowerCase()}
                  title={testName}
                >
                  <AthleteGraphs
                    stats={props.athleteInfo.stats}
                    currentTests={currentTests}
                    testName={testName}
                    key={testName}
                  />
                </Tab>
              );
            })}
          </Tabs>
        </div>
      </div>
    </Fragment>
  );
};

export default AthleteProfile;
