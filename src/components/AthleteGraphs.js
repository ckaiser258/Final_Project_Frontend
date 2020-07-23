import React, {Fragment} from "react";
import { Line, Doughnut } from "react-chartjs-2";

const AthleteGraphs = (props) => {

      //Sort dates in ascending order (Since they're strings not date-time objects)

    let performanceDates = props.currentTests.map(test => {
        return test.date
    })

    let injuryDates = props.injuries.map(injury => {
        return injury.date
    })

    let reverseDateRepresentation = date => {
        let parts = date.split('/')
        return `${parts[2]}/${parts[1]}/${parts[0]}`
    }

    let sortedPerformanceDates = 
    performanceDates.map(reverseDateRepresentation)
    .sort()
    .map(reverseDateRepresentation)

    let injurySites = props.injuries.map(injury => {
        return injury.site
    })
    
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
      }

      let injuryData = {
        labels: injurySites,
        datasets: [
          {
            label: "Result",
            fill: false,
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
              ],
              hoverBackgroundColor: [
              '#501800',
              '#4B5000',
              '#175000',
              '#003350',
              '#35014F'
              ],
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: injurySites.map((injury) => {
                let counts = {}
                return counts[injury] = (counts[injury] || 0) + 1
            }),
          },
        ],
      }

  return (
      <Fragment>

      {/* Performance graph */}

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


    {/* injury graph */}


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

    </Fragment>

  );
};

export default AthleteGraphs;
