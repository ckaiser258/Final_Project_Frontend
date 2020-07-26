import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
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
import Container from "react-bootstrap/Container"

const handleImageError = (e) => {
  e.target.src =
    "https://s3-us-west-2.amazonaws.com/sportshub2-uploads-prod/files/sites/307/2020/06/26000313/sport.png";
};

const TeamCard = (props) => {
  return props.teamInfo.user_id === props.userId ? (
    <Fragment>
    <div style={{ paddingTop: 50 }}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Card style={{ maxWidth: 345 }}>
            <Link key={props.teamInfo.id} to={`/team/${props.teamInfo.id}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Team Logo"
                height="140"
                image={props.teamInfo.logo}
                onError={handleImageError}
              />
            </CardActionArea>
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                {props.teamInfo.name}
              </Typography>

              <CardActions>
                <Container>
              <Link key={props.teamInfo.id} to={`/team/${props.teamInfo.id}`}>
                <Button>View Team</Button>
                </Link>
                </Container>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
    </Fragment>) : null;
};

export default TeamCard;
