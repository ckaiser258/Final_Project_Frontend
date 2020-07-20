import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const ProfilePage = (props) => {
    return (
        <div>
      <Jumbotron className="text-center">
        <h1>Hello, Coach {props.userInfo.last_name}</h1>
      </Jumbotron>
      </div>
    );
}

export default ProfilePage;
