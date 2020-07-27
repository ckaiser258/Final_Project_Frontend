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

export default function AthleteInjuryTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{ marginBottom: 20 }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          {props.injuries ? (
            <TableRow>
              <TableCell>Site</TableCell>
              <TableCell align="right">Severity</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          ) : (
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Site</TableCell>
              <TableCell align="right">Severity</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          )}
        </TableHead>
        {props.injuries ? (
          <TableBody>
            {props.injuries.map((injury) => (
              <TableRow key={injury.id}>
                <TableCell component="th" scope="row">
                  {injury.site}
                </TableCell>
                <TableCell align="right">{injury.severity}</TableCell>
                <TableCell align="right">{injury.date}</TableCell>
                <TableCell align="right">{injury.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            {props.teamInjuries.map((injury) => {
              let injuredAthlete = props.athletes.filter((athlete) => {
                return injury.athlete_id === athlete.id;
              });
              return (
                <TableRow key={injury.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontWeight: "bold" }}
                  >
                    {injuredAthlete[0].first_name} {injuredAthlete[0].last_name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {injury.site}
                  </TableCell>
                  <TableCell align="right">{injury.severity}</TableCell>
                  <TableCell align="right">{injury.date}</TableCell>
                  <TableCell align="right">{injury.description}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
