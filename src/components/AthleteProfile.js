import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Typography from "@material-ui/core/Typography"

const AthleteProfile = (props) => {
    return(
        <div className="text-center" style={{paddingRight: 100}}><Jumbotron><Typography gutterBottom variant="h2" component="h4">{props.athleteInfo.first_name} {props.athleteInfo.last_name}</Typography></Jumbotron></div>
    )
}

export default AthleteProfile