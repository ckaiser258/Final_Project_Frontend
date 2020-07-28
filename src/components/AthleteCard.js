import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import Button from "react-bootstrap/Button";

const handleImageError = (e) => {
  e.target.src =
    "https://st3.depositphotos.com/4430281/13950/v/450/depositphotos_139504752-stock-illustration-muscular-sprinter-runner.jpg";
};

const AthleteCard = (props) => {
  const athleteUrl = `${props.athleteInfo.first_name
    .replace(/\s+/g, "-")
    .toLowerCase()}-${props.athleteInfo.last_name
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  let handleDelete = () => {
    props.deleteAthlete(props.athleteInfo)
  };

  return (
    <Fragment>
      <div style={{ paddingTop: 50 }}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Card style={{ maxWidth: 345 }}>
              <Link
                key={props.athleteInfo.id}
                to={`/${props.athleteInfo.id}/${athleteUrl}`}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Athlete Image"
                    height="140"
                    image={props.athleteInfo.image}
                    onError={handleImageError}
                  />
                </CardActionArea>
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h4" component="h4">
                  {props.athleteInfo.first_name} {props.athleteInfo.last_name}
                </Typography>

                <CardActions>
                  <div>
                    <div>
                      <Link
                        key={props.athleteInfo.id}
                        to={`/${props.athleteInfo.id}/${athleteUrl}`}
                      >
                        <Button>View Stats</Button>{' '}
                      </Link>
                    </div>
                    <div>
                      <Button
                        onClick={handleDelete}
                        variant="outline-danger"
                        size="sm"
                        style={{ marginTop: 7, padding: .0, paddingRight: 3, paddingLeft: 3}}
                      >
                        Remove Athlete
                      </Button>
                    </div>
                  </div>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default AthleteCard;
