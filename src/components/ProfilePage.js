import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const ProfilePage = (props) => {
    return (
      <Jumbotron className="text-center">
        <h1>Hello, Coach {props.userInfo.last_name}</h1>
      </Jumbotron>
    );
}

export default ProfilePage;
