import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Typography from '@material-ui/core/Typography'

const ProfilePage = (props) => {
    return (
<div className="text-center" style={{paddingRight: 100}}><Jumbotron><Typography gutterBottom variant="h2" component="h4">Hello, Coach {props.userInfo.last_name}</Typography></Jumbotron></div>
    );
}

export default ProfilePage;
