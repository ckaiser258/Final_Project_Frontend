import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function AthletePerformanceTable(props) {
  const classes = useStyles();

  let performanceDates = props.stats.map(stat => {
    return stat.date
  });

  let sortedAthletePerformanceTests = props.stats.sort(function(a,b) {
    return new Date(a.date) - new Date(b.date)
  })

  console.log(sortedAthletePerformanceTests)

  return (
    <TableContainer component={Paper} style={{ marginBottom: 20 }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
            <TableRow>
              <TableCell>Test</TableCell>
              <TableCell align="right">Result</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
        </TableHead>
          <TableBody>
            {sortedAthletePerformanceTests.map((stat) => (
              <TableRow key={stat.id}>
                <TableCell component="th" scope="row" style={{ fontWeight: "bold" }}>
                  {stat.test_name}
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>{stat.result}</TableCell>
                <TableCell align="right">{stat.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        
      </Table>
    </TableContainer>
  );
}
