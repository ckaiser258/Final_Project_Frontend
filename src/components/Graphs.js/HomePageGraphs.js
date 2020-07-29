import React from "react";
import { Doughnut, HorizontalBar } from "react-chartjs-2";

const HomePageGraphs = (props) => {
  //   const uniqueTestNames = props.teamInfo.stats
  //     .map((stat) => stat.test_name)
  //     .filter((value, index, self) => self.indexOf(value) === index);

  //   const performanceDates = props.teamInfo.stats
  //     .map((stat) => stat.date)
  //     .filter((value, index, self) => self.indexOf(value) === index);

  //   const aggregateResults = () => {
  //     let sortedPerformanceTests = props.teamInfo.stats.sort(function (a, b) {
  //       return new Date(a.date) - new Date(b.date);
  //     });
  //     let aggregatedResults = {};
  //     for (let i = 0; i < sortedPerformanceTests.length; i++) {
  //       let test = sortedPerformanceTests[i];
  //       if (aggregatedResults[test.date]) {
  //         aggregatedResults[test.date] = [
  //           ...aggregatedResults[test.date],
  //           test.result,
  //         ];
  //       } else {
  //         aggregatedResults[test.date] = [test.result];
  //       }
  //     }
  //     for (let result in aggregatedResults) {
  //       let averageResult =
  //         aggregatedResults[result].reduce((a, b) => a + b, 0) /
  //         aggregatedResults[result].length;
  //       aggregatedResults[result] = Math.round(100 * averageResult) / 100;
  //     }
  //     return aggregatedResults;
  //   };

  //   let teamAverage = aggregateResults();

  //   let performanceData = {
  //     labels: performanceDates,
  //     datasets: [
  //       {
  //         label: "Team Average",
  //         fill: false,
  //         backgroundColor: "rgba(75,192,192,1)",
  //         borderColor: "rgba(0,0,0,1)",
  //         borderWidth: 2,
  //         data: Object.values(teamAverage),
  //       },
  //     ],
  //   };

  //   {
  //     console.log(teamAverage);
  //   }
  //   return (
  //             <Line
  //         data={performanceData}
  //         height={250}
  //         width={350}
  //         options={{
  //           maintainAspectRatio: false,
  //           title: {
  //             display: true,
  //             text: `${props.testName ? `${props.testName}` : "No Data Available"}`,
  //             maintainAspectRatio: false,
  //             fontSize: 20,
  //           },
  //           legend: {
  //             display: true,
  //             position: "right",
  //           },
  //         }}
  //       />
  //   )

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

  // let injurySites = props.teamInfo.injuries.map((injury) => {
  //   return injury.site;
  // });

  // let uniqueInjurySites = injurySites.filter(
  //   (value, index, self) => self.indexOf(value) === index
  // );

  // let injuryCounts = {};

  // injurySites.map((injury) => {
  //   return (injuryCounts[injury] = (injuryCounts[injury] || 0) + 1);
  // });

  // injuryCounts = Object.values(injuryCounts);

  // let injuryData = {
  //   labels: uniqueInjurySites,
  //   datasets: [
  //     {
  //       label: "Result",
  //       fill: false,
  //       backgroundColor: [
  //         "#FF6383",
  //         "#36A2EB",
  //         "#F2BA52",
  //         "#00A6B4",
  //         "#6800B4",
  //       ],
  //       borderColor: "rgba(0,0,0,1)",
  //       borderWidth: 2,
  //       data: injuryCounts,
  //     },
  //   ],
  // };

  return (
    <HorizontalBar
      data={data}
      height={350}
      width={400}
      options={{
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
  //   <Doughnut
  //   data={injuryData}
  //   height={325}
  //   width={425}
  //   options={{
  //     maintainAspectRatio: false,
  //     title: {
  //       display: true,
  //       text: `${
  //         props.teamInfo.injuries.length !== 0 ? `Injuries` : "No Data Available"
  //       }`,
  //       maintainAspectRatio: false,
  //       fontSize: 20,
  //     },
  //     legend: {
  //       display: true,
  //       position: "right",
  //     },
  //     layout: {
  //       padding: {
  //         left: 100,
  //         top: 25,
  //         bottom: 20,
  //       },
  //     },
  //   }}
  // />
  );
};

export default HomePageGraphs;
